// gallery.js

// Initial setup when the page loads
function initializeGallery() {
    const display = document.getElementById("image");

    // Set a default background image and text on load
    display.style.backgroundImage = 'url("img_beach/agadir_beach.jpg")'; // Change to any preferred default image
    display.innerHTML = "Welcome! Hover over an image below to display here.";

    // Call addTabFocus to enable keyboard navigation
    addTabFocus();
}

// Function to add tabindex to each image for keyboard accessibility
function addTabFocus() {
    // Get all elements with the class "preview"
    const images = document.getElementsByClassName("preview");

    // Loop through each image to set tabindex and log confirmation
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); // Make the image focusable by keyboard
        console.log(`Tabindex added to image ${i + 1}: ${images[i].alt}`);
    }
}

// Function to update the main display area on hover or focus
function upDate(previewPic) {
    const display = document.getElementById("image");
    display.style.backgroundImage = `url(${previewPic.src})`;
    display.innerHTML = previewPic.alt;
}

// Function to reset the main display area on mouseout or blur
function unDo() {
    const display = document.getElementById("image");
    display.style.backgroundImage = "none";
    display.innerHTML = "Hover over an image below to display here.";
}
