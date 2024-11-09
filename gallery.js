function upDate(previewPic) {
    const mainImage = document.getElementById('image');
    mainImage.style.backgroundImage = `url(${previewPic.src})`;
    mainImage.textContent = previewPic.alt;
}

function unDo() {
    const mainImage = document.getElementById('image');
    mainImage.style.backgroundImage = 'url("")';
    mainImage.textContent = 'Hover over an image below to display here.';
}