// JavaScript for Hospitals Page

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the "Donate" buttons
    const donateButtons = document.querySelectorAll(".signup");
    donateButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Perform action when the button is clicked (e.g., initiate donation process)
            alert("Thank you for your donation!");
        });
    });

    // Add event listener to the "Notifications" bell icon
    const bellIcon = document.querySelector(".fa-bell");
    bellIcon.addEventListener("click", function() {
        // Perform action when the bell icon is clicked (e.g., show notifications dropdown)
        alert("Notifications dropdown will be shown here.");
    });

    // You can add similar event listeners for other elements as needed (e.g., navigation links, etc.)
});
