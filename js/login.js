function login() {

    let user = document.querySelector("#userField").value;
    let pass = document.querySelector("#passwordField").value;
    let message = document.querySelector("#loginMessage");
    
    for (const {name, user, id, password} of staff) {
        if (user == user || id == parseInt(user)) {
            if (password == pass) {
                sessionStorage.setItem('user', name);
                window.location = "/pages/mainPage.html";
            }
        }
    }
    message.innerHTML = `<p>Usuario o contraseña inválidos</p>`;
}

function formSubmit(e) {
    if (e.keyCode == 13) {
        login();
    }
}

let submit = document.querySelector("#submit");
let enter = document.addEventListener("keypress", formSubmit)
submit.addEventListener("click", login);