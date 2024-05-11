let username = document.querySelector("#inputName")
let email = document.querySelector("#inputEmail")
let password = document.querySelector("#inputpassword")
let phoneNumber = document.querySelector("#inputPhoneNum")
let dateBirth = document.querySelector("#inputDate")
let nationalID = document.querySelector("#inputNationalId")
let address = document.querySelector("#inputAddress")
let gender = document.querySelector(".gender")

let register_btn = document.querySelector("#sign_up")

register_btn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (username.value==="" || email.value==="" || password.value ==="" || phoneNumber.value==="" || dateBirth.value==="" || nationalID.value==="" || address.value==="" || gender.value===""){
        alert("please fill data")
    } else {
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value); // 
        localStorage.setItem("phoneNumber" , phoneNumber.value);
        localStorage.setItem("dateBirth" , dateBirth.value);
        localStorage.setItem("nationalID" , nationalID.value);
        localStorage.setItem("address" , address.value);
        localStorage.setItem("gender" , gender.value);
        setTimeout ( () => {
            window.location = "signin.html"
        } , 1500)
    }
})

