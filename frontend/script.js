const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutButton = document.getElementById('logoutButton');

// Toggle between Login and Registration forms
document.getElementById('showRegister').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
});

// Login Form Submission
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      window.location.href = 'home.html'; // Redirect to welcome page
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert('Login failed. Please try again.');
  }
});

// Registration Form Submission
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      window.location.href = 'home.html'; // Redirect to welcome page
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert('Registration failed. Please try again.');
  }
});

// Logout Button
if (logoutButton) {
  logoutButton.addEventListener('click', async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = 'index.html'; // Redirect to login page
      }
    } catch (err) {
      alert('Logout failed. Please try again.');
    }
  });
}