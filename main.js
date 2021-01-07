
const button = document.querySelector('.submit-btn');
const input = document.querySelector('input');
const errorMessage = document.querySelectorAll('.error');

button.addEventListener('click', function () {
    if (!emailIsValid(input.value)) {
        errorMessage[0].style.display = "block";
        errorMessage[1].style.display = "block";
    } else {
        errorMessage[0].style.display = "none";
        errorMessage[1].style.display = "none";
    }
})

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}