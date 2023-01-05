const form = document.getElementById('form');
const email = document.getElementById('mail');
const password = document.getElementById('password');
const confirmedPassword = document.getElementById('confirm_password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmedPasswordValue = confirmedPassword.value.trim();

    if (passwordValue === "") {
        errorMessage(password, "*blank password")

    }else if (passwordValue !== confirmedPassword){
        errorMessage()
    }else {
        success(password)
    }

    if (emailValue === "") {
        errorMessage(email, '*Email cannot be blank')
    }else if (!isValidEmail(emailValue)) {
        errorMessage(email, '*Invalid Email')

    }else{
        
        success(email)
    }
}

function errorMessage(value, message) {
const formController = value.parentElement;
const small = formController.querySelector('small')
small.innerText = message;
formController.className = 
'form-control error' 

}

function success(value) {
    const formController = value.parentElement;
    formController.className = 'form-control success'
}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}