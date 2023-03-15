// JavaScript code for the login form

const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    alert('Please enter a username and password');
  } else if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    // redirect to another page or perform some other action
  } else {
    alert('Incorrect username or password');
  }

  // clear the form fields
  usernameInput.value = '';
  passwordInput.value = '';
});
