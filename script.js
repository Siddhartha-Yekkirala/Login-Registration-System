const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Handle Registration
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const msg = document.getElementById("registerMsg");

      if (password !== confirmPassword) {
        msg.textContent = "❌ Passwords do not match!";
        msg.style.color = "red";
        return;
      }

      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      msg.textContent = "✅ Registration successful!";
      msg.style.color = "green";
    });
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const msg = document.getElementById("loginMsg");

      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.email === email && user.password === password) {
        localStorage.setItem("loggedInUser", user.name);
        window.location.href = "dashboard.html";
      } else {
        msg.textContent = "❌ Invalid email or password!";
        msg.style.color = "red";
      }
    });
  }
});

// Logout function for dashboard
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}