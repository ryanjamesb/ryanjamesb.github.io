const navButtons = document.querySelector(".nav-buttons");
const dropdownButton = document.querySelector(".dropdown");

var slideshowImages = document.getElementsByClassName("slide");
let slideIndex = 0;
slideshow();

function dropdownMobileMenu() {
    navButtons.classList.toggle("active");
    dropdownButton.classList.toggle("active");
    if (navButtons.style.maxHeight) {
        navButtons.style.maxHeight = null;
    }
    else {
        navButtons.style.maxHeight = navButtons.scrollHeight + "px";
    }

    if (dropdownButton.classList.contains("active")) {
        dropdownButton.innerHTML = "<i class='fa-solid fa-x'></i>";
    }
    else {
        dropdownButton.innerHTML = "<i class='fa-solid fa-bars'></i>";
    }
}

function slideshow() {
    for (let i = 0; i < slideshowImages.length; i++) {
        slideshowImages[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideshowImages.length - 1) { slideIndex = 0 }

    slideshowImages[slideIndex].style.display = "block";
    setTimeout(slideshow, 7000);
    
}