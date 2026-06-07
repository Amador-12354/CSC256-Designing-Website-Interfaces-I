// Will use this function to organize the code for adding my info to the HTML
function loadInfo() {
    // This allows me to change the contents of my HTML element - textContent is best option to use from a performance perspective
    document.getElementById("divMajor").textContent = "Major: Advancing Computer Science";
    // set the email
    document.getElementById("divEmail").textContent = "Email: mamadorleon87815@uat.edu";
    // set the grad date
    document.getElementById("divGradDate").textContent = "Expected Graduation Date: May 2027";
}
