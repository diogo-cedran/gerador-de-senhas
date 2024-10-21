const passwordInput = document.getElementById('password'); 
const lengthInput = document.getElementById('password-length');
const lengthValue = document.getElementById('length-value');
const upperCheckbox = document.getElementById('include-upper');
const lowerCheckbox = document.getElementById('include-lower');
const numberCheckbox = document.getElementById('include-numbers');
const symbolCheckbox = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const notification = document.getElementById('notification');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*';

lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
    updateSliderBackground();
});

function generatePassword() {
    let characters = '';
    if (upperCheckbox.checked) characters += upperCase;
    if (lowerCheckbox.checked) characters += lowerCase;
    if (numberCheckbox.checked) characters += numbers;
    if (symbolCheckbox.checked) characters += symbols;

    let password = '';
    for (let i = 0; i < lengthInput.value; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordInput.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
    showNotification(); 
});

function showNotification() {
    notification.style.opacity = '1';
    notification.style.visibility = 'visible';
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.visibility = 'hidden';
    }, 2000); 
}

function updateSliderBackground() {
    const value = (lengthInput.value - lengthInput.min) / (lengthInput.max - lengthInput.min) * 100;
    lengthInput.style.background = `linear-gradient(to right, #4caf50 ${value}%, #e5e5e5 ${value}%)`;
}

updateSliderBackground();
