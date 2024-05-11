let email = document.querySelector("#inputEmail-sign-in")
let password = document.querySelector("#inputpassword-sign-in")

let loginBtn = document.querySelector("#sign_in")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (email.value==="" || password.value===""){
        alert("please fill data ")
    } else {
        if ( (getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword === password.value )  )
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 1500)
        } else {
            alert("email or password is wrong ")
        }
    }
})



