function checkData() {
    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    console.log("Name: " + nameElement.value);
    console.log("Email: " + emailElement.value);

    if(nameElement.value == "") {
        alert("Please enter your name");
        nameElement.focus();
        return false;
    }

    if(emailElement.value == "") {
        alert("Please enter your email");
        emailElement.focus();
        return false;
    }

    return true;
}