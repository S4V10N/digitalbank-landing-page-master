console.log("js is working");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger img");
const hamburgerMenu = document.querySelector(".hamburger__menu");
const home = document.querySelector(".home");
const navLinks = document.querySelectorAll(".hamburger__menu a");
const grad = document.querySelector(".gradient");

function openMenu() {
    grad.classList.add("block");
    hamburgerMenu.classList.add("menu");
    hamburgerIcon.src = "./images/icon-close.svg";
    document.addEventListener("click", handleOutsideClick);
}
function closeMenu() {
    hamburgerMenu.classList.remove("menu");
    grad.classList.remove("block");
    hamburgerIcon.src = "./images/icon-hamburger.svg";
    document.removeEventListener("click", handleOutsideClick);
}

hamburger.addEventListener("click", function (e) {
    e.stopPropagation();

    if (hamburgerMenu.classList.contains("menu")) {
        closeMenu();
    } else {
        openMenu();
    }
});

function handleOutsideClick(e) {
    const clickedOutsideMenu =
        !hamburgerMenu.contains(e.target) && !hamburger.contains(e.target);

    if (clickedOutsideMenu) {
        closeMenu();
    }
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        closeMenu();
    });
}
