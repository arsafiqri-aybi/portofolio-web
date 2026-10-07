#!/usr/bin/env python3
"""Validate authored KB structure and internal links; no external source audit."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, re, sys
ROOT=Path(__file__).resolve().parents[1]
errors=[]
def require(condition,message):
    if not condition: errors.append(message)
def load(path):
    try:return json.loads((ROOT/path).read_text(encoding='utf-8'))
    except Exception as exc:errors.append(f'{path}: {exc}');return {}
mods=load('catalog/modules.json').get('modules',[])
require(len(mods)==32,'Expected exactly 32 master modules')
ids={m['id'] for m in mods}
require(ids=={f'M{i:02d}' for i in range(1,33)},'Master module IDs differ')
registry=load('sources/registry.json').get('sources',[])
source_ids={s['id'] for s in registry}
require(len(source_ids)==len(registry),'Duplicate source IDs')
valid_status={'opened','verified-excerpt','reading-list','inherited-reference','read'}
for s in registry:
    require(s['access_status'] in valid_status,f"Invalid access status {s['id']}")
    if s['access_status'] in {'reading-list','inherited-reference'}:
        require(s['checked_at'] is None,f"Unverified source dated as checked: {s['id']}")
for m in mods:
    p=ROOT/m['path']
    require(p.is_file(),f'Missing module {m["path"]}')
    if not p.is_file():continue
    text=p.read_text()
    require(text.startswith(f'# {m["id"]} — '),f'Module identity mismatch {m["id"]}')
    for heading in ['## Latihan penerapan','## Bukti penerimaan','## Hubungan dan dampak perubahan','## Sumber dan batas bukti']:
        require(heading in text,f'{m["id"]} missing {heading}')
    require(len(text.split())>=450,f'{m["id"]} needs substantive review (under 450 words)')
    for sid in re.findall(r'\b(?:S\d{2}|R\d{2}|P\d{2})\b',text):
        require(sid in source_ids,f'{m["id"]} unknown source {sid}')
    require(set(m['prerequisites'])<=ids,f'Unknown prerequisite in {m["id"]}')
visiting=set();visited=set();by_id={m['id']:m for m in mods}
def visit(mid):
    if mid in visiting:errors.append(f'Prerequisite cycle at {mid}');return
    if mid in visited:return
    visiting.add(mid)
    for dep in by_id[mid]['prerequisites']:
        if dep in by_id:visit(dep)
    visiting.remove(mid);visited.add(mid)
for mid in ids:visit(mid)
graph=load('catalog/graph.json')
require(set(graph.get('nodes',[]))==ids,'Graph node mismatch')
for e in graph.get('edges',[]):
    require(e['from'] in ids and e['to'] in ids,f'Invalid graph edge {e}')
    require(e['relation'] in {'prerequisite','review-impact'},f'Invalid graph relation {e}')
expected={(d,m['id']) for m in mods for d in m['prerequisites']}
actual={(e['from'],e['to']) for e in graph.get('edges',[]) if e['relation']=='prerequisite'}
require(expected==actual,'Prerequisite graph differs from catalog')
topics=load('catalog/topics.json').get('topics',[])
require(len({t['id'] for t in topics})==len(topics),'Duplicate topic IDs')
for t in topics:
    require(t['module'] in ids,f'Invalid topic module {t["id"]}')
    p=ROOT/t['path']
    require(p.is_file() and f"## {t['title']}" in p.read_text(),f'Topic not authored {t["id"]}')
md_files=list(ROOT.rglob('*.md'));link_count=0
for p in md_files:
    text=re.sub(r'```[^\n]*\n.*?```','',p.read_text(),flags=re.S)
    for target in re.findall(r'!?\[[^\]]*\]\(([^)]+)\)',text):
        u=urlsplit(target)
        if u.scheme or target.startswith('#'):continue
        link_count+=1
        destination=(p.parent/unquote(u.path)).resolve()
        require(destination.is_relative_to(ROOT),f'Link outside repo {p.relative_to(ROOT)}: {target}')
        require(destination.exists(),f'Broken link {p.relative_to(ROOT)}: {target}')
class HTMLCheck(HTMLParser):
    def __init__(self,path):super().__init__();self.path=path;self.ids=set();self.refs=[];self.headings=0;self.lang=None
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='html':self.lang=a.get('lang')
        if tag=='h1':self.headings+=1
        if 'id' in a:
            require(a['id'] not in self.ids,f'Duplicate HTML id {self.path}: {a["id"]}')
            self.ids.add(a['id'])
        for attr in ['src','href']:
            if attr in a:self.refs.append(a[attr])
        if tag=='img':require('alt' in a,f'Missing alt in {self.path}')
        if tag=='button':require(a.get('type')=='button',f'Unspecified button type {self.path}')
html_files=list((ROOT/'examples').rglob('*.html'))
for p in html_files:
    parser=HTMLCheck(p.relative_to(ROOT));parser.feed(p.read_text())
    require(parser.lang=='id',f'Expected lang=id {p}')
    require(parser.headings==1,f'Expected one primary heading {p}')
    for target in parser.refs:
        u=urlsplit(target)
        if u.scheme or u.netloc:continue
        if not u.path:
            require(not u.fragment or u.fragment in parser.ids,f'Unknown local HTML anchor {p}: {target}')
            continue
        dest=(p.parent/unquote(u.path)).resolve()
        if dest.is_dir():dest=dest/'index.html'
        require(dest.exists(),f'Broken HTML resource {p.relative_to(ROOT)}: {target}')
        if dest.is_file() and u.fragment and dest.suffix=='.html':
            other=HTMLCheck(dest);other.feed(dest.read_text())
            require(u.fragment in other.ids,f'Unknown destination anchor {p}: {target}')
for p in ROOT.rglob('*.json'):
    try:json.loads(p.read_text())
    except Exception as exc:errors.append(f'Invalid JSON {p}: {exc}')
if errors:
    print(json.dumps({'status':'FAIL','errors':errors},ensure_ascii=False,indent=2));sys.exit(1)
print(json.dumps({'status':'PASS','modules':len(mods),'topic_sections':len(topics),'graph_edges':len(graph['edges']),'sources':len(registry),'markdown_files':len(md_files),'internal_markdown_links':link_count,'html_files':len(html_files)},ensure_ascii=False,indent=2))
