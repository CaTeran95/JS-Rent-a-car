function login() {

    let user = document.querySelector("#userField").value;
    let pass = document.querySelector("#passwordField").value;
    let message = document.querySelector("#loginMessage");
    
    for (const employee of staff) {
        if (employee.user == user || employee.id == parseInt(user)) {
            if (employee.password == pass) {
                sessionStorage.setItem('user', employee.name);
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