
let loginForm = document.querySelector(".loginForm");
let SignUp_form =document.querySelector(".SignUp_form");
let SignUp_Btn = document.getElementById("SignUp_Btn");
let Login_Btn = document.getElementById("Login_Btn");

SignUp_Btn.addEventListener('click',function(){
   SignUp_form.style.transform= "translateY("+0+"px)";
   loginForm.style.transform= "translateY("+500+"px)";

});
Login_Btn.addEventListener("click",function(){
    loginForm.style.transform= "translateY("+0+"px)";
    SignUp_form.style.transform= "translateY("+500+"px)";

});


