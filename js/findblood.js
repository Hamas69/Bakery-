//findblood

let selectedBloodGroup = null;

function selectBloodGroup(bloodGroup) {
    selectedBloodGroup = bloodGroup;
    // You can add visual indication of selected blood group if needed
    console.log('Selected blood group:', selectedBloodGroup);
}

function validateForm() {
    const name = document.getElementById("inputName").value;
    const phoneNum = document.getElementById("inputPhoneNum").value;
    const location = document.getElementById("inputLocation").value;

    if (!name || !phoneNum || !location || !selectedBloodGroup) {
        alert("Please fill in all fields and select a blood group.");
        return false;
    }

    // You can add more specific validation logic here if needed

    return true;
}