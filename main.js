
const button = document.querySelector('.submit-btn');
const input = document.querySelector('input');
const errorMessage = document.querySelectorAll('.error');

button.addEventListener('click', function () {
    if (!emailIsValid(input.value)) {
        errorMessage[0].style.display = "block";
        errorMessage[1].style.display = "block";
        input.classList.add('error-border');
    } else {
        errorMessage[0].style.display = "none";
        errorMessage[1].style.display = "none";
        input.classList.remove('error-border');
    }
})

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}