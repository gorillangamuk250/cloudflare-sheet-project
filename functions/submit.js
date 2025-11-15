export async function onRequestPOST({ request }) {
    try {
        // Hanya izinkan POST request
        if (request.method !== 'POST') {
            // Jika ada GET request ke /submit, kembalikan 405
            return new Response('Method Not Allowed. Hanya POST request yang diizinkan.', { status: 405 });
        }
        
        // Menerima data yang dikirim oleh formulir
        const formData = await request.formData();
        
        // Mengubah data formulir menjadi objek JSON agar mudah ditampilkan
        const testData = Object.fromEntries(formData);
        
        // Mengirimkan respons sukses 200 ke browser
        return new Response(JSON.stringify({ 
            status: "Success",
            message: "Uji Coba BERHASIL! Pages Function berjalan di path baru.",
            catatan: "Data formulir diterima dan diproses oleh /submit.",
            received_data: testData // Menampilkan data yang diterima
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (e) {
        // Jika Pages Function gagal dieksekusi
        console.error("Error Uji Coba:", e.message);
        return new Response('Uji Coba Gagal: Terjadi kesalahan internal saat memproses data formulir.', { status: 500 });
    }
}
