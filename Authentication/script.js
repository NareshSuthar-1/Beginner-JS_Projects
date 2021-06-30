document.querySelector("#Sign_IN_mode_on").addEventListener("click", () => { console.log("ddd") });

let sign_In_form = document.querySelector("#sign_In_form");
let sign_up_form = document.querySelector("#sign_up_form");
let CreateBTN = document.querySelector("#Sign_up_mode_on");
let panel_content = document.querySelector("#panel_content");
let Login_BTN = document.querySelector("#Sign_IN_mode_on");
let form_containet = document.querySelector("form_containet");
let shape = document.querySelector(".shape");
Login_BTN.style.display = "none";
function Sign_Up() {
    console.log("Sign Up ?");
    sign_In_form.style.display = "none";
    sign_up_form.style.display = "block";
    shape.classList.add("Sign_up_mode");

    panel_content.innerHTML = ` <h1>WELCOME !!</h1>
    <p>have no account , Create at one tap</p>
    <button class="btn load-signUp-form" id="Sign_IN_mode_on" onclick="Sign_IN()">Sign IN</button>`;
    setTimeout(() => { shape.classList.remove("Sign_up_mode"); }, 1000)
}
CreateBTN.addEventListener("click", Sign_Up);

function Sign_IN() {
    console.log("log  in");
    sign_In_form.style.display = "block";
    sign_up_form.style.display = "none";
    shape.classList.add("Sign_up_mode");
    setTimeout(() => { shape.classList.remove("Sign_up_mode"); }, 1000)

    Login_BTN.style.display = "block";
    panel_content.innerHTML = `<h1>WELCOME !!!</h1>
        <p>have no account , Create at one tap</p>
        <button class="btn load-signUp-form" id="Sign_up_mode_on" onclick="Sign_Up()">Create Account</button>`;
}



// SIGN IN FORM VALIDATION 

let SignIN_Btn = document.getElementById("SignIN_Btn");
SignIN_Btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("bh")
    if (EmailVALUE && passwordVALUE) {
        alert("SUBMITED");
    }

});


// SIGN UP FORM VALIDATION


let user_name = document.getElementById("user-name");
user_name.addEventListener("blur", () => {
    let regExp = /^[a-zA-Z]/;
    let value = user_name.value;
    if (regExp.test(value)) {
        user_name.parentElement.style.border = "1px solid green";
        // EmailVALUE = true;
        // validatFORM();
    }
    else {
        console.log("invalid");
        user_name.parentElement.style.border = "1px solid red";
        // EmailVALUE = false;
        // validatFORM();
    }
});

let email_Si_UP = document.getElementById("email_Si_UP"); 
email_Si_UP.addEventListener("blur", () => {
    let regExp = /^[0-9a-zA-Z]+@[a-z]+\.([a-z]){3,4}/;
    let value = email_Si_UP.value;
    if (regExp.test(value)) {
        email_Si_UP.parentElement.style.border = "1px solid green";
        // EmailVALUE = true;
        // validatFORM();
    }
    else {
        console.log("invalid");
        email_Si_UP.parentElement.style.border = "1px solid red";
        // EmailVALUE = false;
        // validatFORM();
    }
});
let Sign_UP_password_Validate = document.getElementById("Sign_UP_password");
Sign_UP_password_Validate.addEventListener("blur", () => {
    let regExp = /[\s]/;
    let value = Sign_UP_password_Validate.value;
    if (regExp.test(value)) {
        console.log("invalid");
        Sign_UP_password_Validate.parentElement.style.border = "1px solid red";
        passwordVALUE = false;
        // validatFORM();

    }
    else {
        Sign_UP_password_Validate.parentElement.style.border = "1px solid green";
        passwordVALUE = true;
        // validatFORM();

    }
});





// SignIN_Btn.setAttribute("disabled",false);

let EmailVALUE = false;
let passwordVALUE = false;

function validatFORM(){
    if (EmailVALUE && passwordVALUE) {
        SignIN_Btn.removeAttribute("disabled");
    }
    else{
        SignIN_Btn.setAttribute("disabled",false);

    }
};


let emailValidate = document.getElementById("email");
emailValidate.addEventListener("blur", () => {
    let regExp = /^[0-9a-zA-Z]+@[a-z]+\.[a-z]{3,4}/;
    let value = emailValidate.value;
    if (regExp.test(value)) {
        emailValidate.parentElement.style.border = "1px solid green";
        EmailVALUE = true;
        // validatFORM();
    }
    else {
        console.log("invalid");
        emailValidate.parentElement.style.border = "1px solid red";
        EmailVALUE = false;
        // validatFORM();
    }
});

let passwordValidate = document.getElementById("password");
passwordValidate.addEventListener("blur", () => {
    let regExp = /[\s]/;
    let value = passwordValidate.value;
    if (regExp.test(value)) {
        console.log("invalid");
        passwordValidate.parentElement.style.border = "1px solid red";
        passwordVALUE = false;
        // validatFORM();

    }
    else {
        passwordValidate.parentElement.style.border = "1px solid green";
        passwordVALUE = true;
        // validatFORM();

    }
});

