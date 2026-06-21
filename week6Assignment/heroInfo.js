function saveInfo(){
    // Create shortcut/nicknames for HTML elements
    let txtUserName = document.getElementById("txtUserName");
    let txtAbility = document.getElementById("txtAbility");
    let numHealth = document.getElementById("numHealth");
    let numPoints = document.getElementById("numPoints");

    // Build a string with titles and user's inputs here
    let output = "User Name: " + txtUserName.value + "\n" + "Special Ability: " + txtAbility.value + "\n" + "Health: " + numHealth.value + "\n" + "Point Total: " + numPoints.value;

    // Add output to textarea
    document.getElementById("textaHero").value = output;

    // Cleans out text boxs
    txtUserName.value = "";
    txtAbility.value = "";
    numHealth.value = "";
    numPoints.value = "";
}