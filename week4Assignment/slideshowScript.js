// array with the image locations
let arrImage = [
    "./Assets/supraLogo.jpeg",
    "./Assets/supraFront.jpeg",
    "./Assets/supraBackLeftSide.jpeg",
    "./Assets/supraFrontLeftSide.jpeg"
];

// variable to keep track of the current image index
let currImage = 0;

// This function will show the slide - pass in the index of the image to show
function showSlide(index) {
    // Gets a shortcut/nickname to the img element in the HTML
    let image = document.getElementById("imgSlide");
    // Change the image source to the relevant address from the array
    image.src = arrImage[index];
}

// Previous button function click event
function prevSlide(){
    // When the user click the previous button, currImage needs to change to currImage - 1
    currImage--;

    // If user is in the 1st image in the array and click the Previous button, the last image in the array will show
    if (currImage < 0){
        // change currImage from -1 to the last index of array
        currImage = arrImage.length - 1;
    }

    // THis will load the new image
    showSlide(currImage);
}

// Next button fucntion click event
function nextSlide(){
    // When the user click the next button, currImage needs to change to currImage + 1
    currImage++;

    // If  currImage has exceeded the number of images in array, then it will reset back to 1st image
    if (currImage >= arrImage.length){
        currImage = 0;
    }

    // THis will load the new image
    showSlide(currImage);
}
