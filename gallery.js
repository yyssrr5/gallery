
function initializeGallery() {
    const display = document.getElementById("image");

    display.style.backgroundImage = 'url("img_beach/agadir_beach.jpg")'; 
    display.innerHTML = "Welcome! Hover over an image below to display here.";

    addTabFocus();
}

function addTabFocus() {
    const images = document.getElementsByClassName("preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); 
        console.log(`Tabindex added to image ${i + 1}: ${images[i].alt}`);
    }
}

function upDate(previewPic) {
    const display = document.getElementById("image");
    display.style.backgroundImage = `url(${previewPic.src})`;
    display.innerHTML = previewPic.alt;
}

function unDo() {
    const display = document.getElementById("image");
    display.style.backgroundImage = "none";
    display.innerHTML = "Hover over an image below to display here.";
}


