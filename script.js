
//declarations of inputs
let name = document.getElementById("name");
let adress = document.getElementById("adress");
let password =document.getElementById("password");
let date = document.getElementById("birthDate");
let gender = document.getElementById("mySelect");
let submit = document.getElementById("MySub");
//declarations of errors paragraphs
let namePara = document.getElementById("name_error")
let adPara = document.getElementById("ad_error")
let passPara = document.getElementById("pass_error")
let datePara = document.getElementById("date_error")
let genderPara = document.getElementById("gender_error")


 
// events
document.getElementById("MySub").addEventListener("click",validate)


//functions
function validate(){
    if (name.value.length ==0){
        namePara.innerHTML = "Enter ur name"
        name.style.border ="red 1px solid"
 
    }else if (name.value.length<8){
        namePara.innerHTML ="name must be more than 8 char"
        name.style.border ="red 1px solid"
    }

}

