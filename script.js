
//declarations of inputs
let name = document.getElementById("name");
let email = document.getElementById("email");
let password =document.getElementById("password");
let date = document.getElementById("birthDate");
let gender = document.getElementById("mySelect");
let submit = document.getElementById("MySub");
let container  = document.getElementById("container");
//declarations of errors paragraphs
let namePara = document.getElementById("name_error")
let adPara = document.getElementById("ad_error")
let passPara = document.getElementById("pass_error")
let datePara = document.getElementById("date_error")
let genderPara = document.getElementById("gender_error")


 
// events
document.getElementById("MySub").addEventListener("click",validateName)
document.getElementById("MySub").addEventListener("click",validateEmail)


//functions
function validateName(){
    if (name.value.length == 0){
        namePara.innerHTML = "Enter ur name"
        name.style.border ="red 1px solid"

    }else if (name.value.length<8){
        namePara.innerHTML ="name must be more than 8 char"
        name.style.border ="red 1px solid"

}
}
function  validateEmail(){
    if (email.value.length= 0 || email.value.length<10){
        adPara.innerHTML="invalid adress"
        email.style.border ="red 1px solid"
    }else if (email.value.indexOf(`@`)=== -1){
        adPara.innerHTML="invalid adress u have to use `@`"
        email.style.border ="red 1px solid"
    }
}
// function validate(){
//     if (name.value.length ==0){
//         namePara.innerHTML = "Enter ur name"
//         name.style.border ="red 1px solid"
 
//     }else if (name.value.length<8){
//         namePara.innerHTML ="name must be more than 8 char"
//         name.style.border ="red 1px solid"
//     }else if (email.value.length= 0 || email.value.length<10){
//         adPara.innerHTML="invalid adress"
//         email.style.border ="red 1px solid"
//     }else if (email.value.indexOf(`@`)=== -1){
//         adPara.innerHTML="invalid adress u have to use `@`"
//         email.style.border ="red 1px solid"
//     }else if(password.value.length<8){
//         passPara.innerHTML ="password must be equal or more than 8 char"
//         password.style.border ="red 1px solid"
//     }

// }