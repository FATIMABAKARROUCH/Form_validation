
//declarations of inputs and buttons
let name = document.getElementById("name");
let email = document.getElementById("email");
let password =document.getElementById("password");
let date = document.getElementById("birthDate");
let gender = document.getElementById("mySelect");
let submit = document.getElementById("MySub");
let container  = document.getElementById("container");
let editButton = document.getElementById("editionBtn");
//declarations of errors paragraphs
let namePara = document.getElementById("name_error")
let adPara = document.getElementById("ad_error")
let passPara = document.getElementById("pass_error")
let datePara = document.getElementById("date_error")
let genderPara = document.getElementById("gender_error")


 
// events (submit Button)
submit.addEventListener("click",validateName)
submit.addEventListener("click",validateEmail)
submit.addEventListener("click",validatePassword)
submit.addEventListener("click",BirthDateChecked)
submit.addEventListener("click", genderSelect)
//events (edit Button)
editButton.addEventListener("click", nameEdition)
editButton.addEventListener("click", emailEdition)
editButton.addEventListener("click", PasswordEdition)

//functions (validation and edition)
function validateName(){
    if (name.value.length == 0){
        namePara.innerHTML = "Enter your name"
        name.style.border ="red 1px solid"
    }else if (name.value.length<8){
        namePara.innerHTML ="name must be more than 8 char"
        name.style.border ="red 1px solid"
    }else{
        name.style.border ="lightGreen 2px solid";
        namePara.innerHTML = "";
    }
}


function  validateEmail(){
    if (email.value.length= 0 || email.value.length<10){
        adPara.innerHTML="Enter a valid email address"
        email.style.border ="red 1px solid"
        
    }else if (email.value.indexOf(`@`)=== -1){
        adPara.innerHTML="invalid adress u have to use `@`"
        email.style.border ="red 1px solid"
    }else{
        email.style.border ="lightGreen 2px solid"
        adPara.innerHTML = ""
    }
}

function validatePassword(){
    if(password.value.length == 0){
        passPara.innerHTML ="Enter your password";
        password.style.border ="red 1px solid";
     }else if(password.value.length <8){
        passPara.innerHTML ="your password must be equal or more than 8 char";
        password.style.border ="red 1px solid";

     }else{
        password.style.border ="lightGreen 2px solid";
        passPara.innerHTML = ""
     }
       
}
function BirthDateChecked(){
    if(date.value === ""){
        datePara.innerHTML = "select your Birth Date"
        date.style.border = "red 1px solid"
    }else{
        datePara.innerHTML = ""
        date.style.border = "lightGreen 2px solid"
    }
}
function genderSelect(){
    if(gender.value ===""){
        genderPara.innerHTML = "select your gender"
        gender.style.border = "red 1px solid"
    }else{
        genderPara.innerHTML = ""
        gender.style.border = "lightGreen 2px solid"
    }
}





function nameEdition(){
    if(name.value.length>=8){
        name.value.length>=8
       
   }else if(name.value.length>=1){
         name.value = ""
   }
   
}

function emailEdition(){
    if( email.value.length<10 || email.value.indexOf(`@`)=== -1){
        email.value = ""
    }
}

function PasswordEdition(){
   if(password.value.length<8){
    password.value =""

   }
}






