const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

