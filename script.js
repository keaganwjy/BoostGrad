// Fungsi untuk animasi smooth scrolling pada navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk menangani klik tombol pesanan
function pesanLayanan(namaPaket) {
    // Pada implementasi nyata, ini bisa diarahkan ke WhatsApp, Form, atau sistem pembayaran
    alert(`Terima kasih telah memilih paket ${namaPaket}! Fitur pemesanan akan segera kami proses.`);
    console.log(`User mencoba memesan paket: ${namaPaket}`);
}