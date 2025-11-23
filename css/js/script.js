// script.js
// Catatan: ini JS sederhana untuk interaksi kecil (tahun & tombol)
document.addEventListener('DOMContentLoaded', function () {
  // set tahun otomatis
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // contoh tombol login (placeholder)
  const btnLogin = document.getElementById('btn-login');
  if (btnLogin) {
    btnLogin.addEventListener('click', function () {
      alert('Fungsi login belum diimplementasikan. Untuk versi nyata, sambungkan ke backend (Auth).');
    });
  }
});
