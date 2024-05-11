let OBtn = document .querySelector("#O+")
let oBtn = document .querySelector("#O-")
let ABtn = document .querySelector("#A+")
let aBtn = document .querySelector("#A-")
let BBtn = document .querySelector("#B+")
let bBtn = document .querySelector("#B-")
let ABBtn = document .querySelector("#AB+")
let abBtn = document .querySelector("#AB-")

let submit_Form = document .querySelector("#submitForm")

submit_Form.addEventListener ("click" , function (e){
    e.preventDefault()
        OBtn.value= "O+";
        oBtn.value= "O-";
        ABtn.value= "A+";
        aBtn.value= "A-";
        BBtn.value= "B+";
        bBtn.value= "B-";
        ABBtn.value= "AB+";
        abBtn.value- "AB-";
    
        localStorage.setItem("O+" , username.value);
        localStorage.setItem("O-" , email.value);
        localStorage.setItem("A+" , password.value); // 
        localStorage.setItem("A-" , phoneNumber.value);
        localStorage.setItem("B+" , dateBirth.value);
        localStorage.setItem("B-" , nationalID.value);
        localStorage.setItem("Ab+" , address.value);
        localStorage.setItem("Ab-" , gender.value);
        setTimeout ( () => {
            window.location = "index.html"
        } , 1500)
    }
)