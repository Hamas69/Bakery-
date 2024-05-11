//sign in
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const email = document.getElementById("inputEmail-sign-in").value;
        const password = document.getElementById("inputpassword-sign-in").value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.trim() === "") {
            alert("Please enter your password.");
            return;
        }

        // If validation passes, submit the form
        // You can also perform additional checks or AJAX request here

        // form.submit(); // Uncomment this line to submit the form
    });

    // Function to validate email address
    function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
});

//sign up
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-div");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const name = document.getElementById("inputName").value;
        const email = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputpassword").value;
        const repassword = document.getElementById("inputRepassword").value;
        const phoneNum = document.getElementById("inputPhoneNum").value;
        const dateOfBirth = document.getElementById("inputDate").value;
        const nationalId = document.getElementById("inputNationalId").value;
        const address = document.getElementById("inputAddress").value;
        const gender = document.querySelector("input[name='gender']:checked");

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.trim() === "") {
            alert("Please enter a password.");
            return;
        }

        if (password !== repassword) {
            alert("Passwords do not match.");
            return;
        }

        if (phoneNum.trim() === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (dateOfBirth.trim() === "") {
            alert("Please enter your date of birth.");
            return;
        }

        if (nationalId.trim() === "") {
            alert("Please enter your national ID.");
            return;
        }

        if (address.trim() === "") {
            alert("Please enter your address.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        // If validation passes, you can submit the form
        // form.submit(); // Uncomment this line to submit the form

    });

    // Function to validate email address
    function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
});

//index

// document.addEventListener("DOMContentLoaded", function() {
//     // Add event listener to the "Notifications" bell icon
//     const bellIcon = document.querySelector(".fa-bell");
//     bellIcon.addEventListener("click", function() {
//         // Toggle the visibility of the notifications dropdown when the bell icon is clicked
//         const dropdownMenu = document.querySelector(".dropdown-menu");
//         dropdownMenu.classList.toggle("show");
//     });

//     // Close the notifications dropdown when clicking outside of it
//     window.addEventListener("click", function(event) {
//         const dropdownMenu = document.querySelector(".dropdown-menu");
//         if (!event.target.matches(".fa-bell") && !event.target.matches(".dropdown-menu") && !event.target.closest(".dropdown-menu")) {
//             dropdownMenu.classList.remove("show");
//         }
//     });
// });










