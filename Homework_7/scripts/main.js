function setDynamicImage() {
    const image = document.getElementById("dynamic-image");

    if (window.innerWidth > 640) {
        image.src = "/images/machine1280w.jpg";
    }
    else {
        image.src = "/images/machine640w.jpg";
    }
}

// Call the setDynamicImage function when the DOM is loaded.
document.addEventListener("DOMContentLoaded", setDynamicImage);
    
// Listen for a resize event and call the function on resize.
window.addEventListener("resize", setDynamicImage);