let arrowNav = document.querySelector(".arrow")

window.addEventListener("scroll", function() {
    if(window.scrollY > 500) {
        arrowNav.classList.add("active-arrow")
    } else {
        arrowNav.classList.remove("active-arrow")
    }
});

arrowNav.addEventListener("click", function() {
    window.scrollTo(pageXOffset, 0);
});
