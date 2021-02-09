const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');

    console.log(usernameInput.value)
    console.log(passwordInput.value)
    if (passwordInput.value.includes(usernameInput.value)) {
        passwordInput.setCustomValidity("Don't use your username in your password.");
    }   else {
            passwordInput.setCustomValidity("");
    }
})