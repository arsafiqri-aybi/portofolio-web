# Pendalaman 08 — Shader dan resource WebGL

## Kapan diperlukan

WebGL bermanfaat untuk scene dengan kebutuhan 3D atau banyak geometry/pixels yang cocok GPU. Untuk satu border hover, CSS lebih sederhana. Scope portofolio tidak mengharuskan 3D; informasi dan navigasi tetap HTML. Ini primer teknis, bukan implementasi production renderer lengkap.

## Pipeline

Geometry disimpan dalam buffer. Attribute memberi nilai per vertex; uniform memberi nilai bersama; vertex shader menghasilkan posisi clip-space; rasterization menghasilkan fragment; fragment shader menghasilkan warna. Texture membawa data gambar; projection/view/model matrices mengubah coordinates sesuai scene.

Contoh shader minimal untuk WebGL 1; WebGL 2 memakai versi/semantik GLSL yang berbeda:

```glsl
// Vertex shader
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
```

```glsl
// Fragment shader
precision mediump float;
uniform vec4 u_color;
void main() { gl_FragColor = u_color; }
```

Snippet bukan renderer runnable: host JS harus create context, compile/link shaders, buat buffer, configure attribute/uniform, viewport dan draw. Compile/link errors dibaca dari log; jangan membuat fallback bergantung shader berhasil.

## Resource lifecycle

Buffer, texture, shader/program dan framebuffer mempunyai ownership. Delete resource saat dispose; detach listeners dan stop rAF. Context loss dapat terjadi; UI fallback tetap ada dan restore bila dirancang. Library scene membantu lifecycle tetapi tidak otomatis mencegah leak.

## Draw call dan batching

Banyak draw call mempunyai overhead. Batching/instancing dapat mengurangi overhead pada scene sesuai, tetapi tidak menghilangkan biaya fragment/texture. Transparent objects, blending dan overdraw dapat mahal. Urutan draw dan depth test mempengaruhi hasil. Jangan mengoptimalkan geometry saat bottleneck ada pada full-screen fragment work.

## Texture, DPR dan resolution

Texture dimensions/format menentukan memory dan bandwidth. Mipmap/filter mempengaruhi sampling; WebGL 1 punya aturan tertentu untuk non-power-of-two texture yang perlu diperiksa. Canvas backing resolution mengikuti viewport dan DPR yang dibatasi berdasarkan pengujian. Dynamic quality tidak boleh membuat bukti karya kabur.

## Lighting dan representation

Material, light, tone mapping dan color management menentukan appearance. Shader yang tampak menarik belum membuktikan warna produk akurat. Scene produk atau data membutuhkan representation yang jujur. Camera control/drag tidak boleh menjadi satu-satunya cara mengakses informasi.

## Debug dan acceptance

Check context, compile/link status, buffers, attribute locations, uniform values, viewport dan clear/draw order. Periksa context loss, resize, offscreen, reduced motion dan disposal. FPS desktop tidak diperluas ke mobile. Shader snippets belum diuji dalam release ini; gunakan official reference dan runnable validation ketika branch 3D diadopsi.

Sumber: S32 dengan status akses pada register. [M24](../knowledge/motion/24-animation-graphics.md), [M26](../knowledge/performance-reliability/26-runtime-performance.md).
