// ==========================================
// KODE TAMBAHAN / PENYESUAIAN DI LOGIN.JS
// ==========================================

// 1. Fungsi untuk langsung mengarahkan ke Beranda (index.html)
function goToHome(e) {
  if (e) e.preventDefault(); // Mencegah reload form bawaan browser
  
  // (Opsional) Simpan status login jika kamu butuh mengecek status pengguna
  localStorage.setItem("isLoggedIn", "true");

  // Arahkan langsung ke Beranda
  window.location.href = "index.html";
}

// 2. Fungsi Toggle Password (jika belum ada di login.js kamu)
function togglePassword() {
  const passwordInput = document.getElementById('passwordInput');
  const eyeIcon = document.getElementById('eye-icon');
  
  if (passwordInput) {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      if (eyeIcon) {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      }
    } else {
      passwordInput.type = 'password';
      if (eyeIcon) {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      }
    }
  }
}

// 3. Event Listener untuk Form Submit
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  
  if (loginForm) {
    loginForm.addEventListener("submit", goToHome);
  }
});