// For the "no" color button
document.getElementById("colorButton-no").addEventListener("click", function () {
    document.body.classList.add("colorSpectrum");
});

// for the "yes" color button
document.getElementById("colorButton-yes").addEventListener("click", function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementById("interface-border").style.backgroundColor = "black";
    document.getElementsByTagName("input")[0].style.backgroundColor = "black";
    document.getElementsByTagName("input")[1].style.backgroundColor = "black";
});

// For the motion button
document.getElementById("motionButton").addEventListener("click", function () {
    document.body.classList.add("rotating");
}); 