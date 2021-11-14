//------modal-------

let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn")

function openModal() {
    modal.classList.add("show")
        modal.classList.remove("hide")
}

function closeModal() {
    modal.classList.add("hide")
        modal.classList.remove("show")
}

function openModalByScroll() {
    if(window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener('scroll', openModalByScroll)
    }
}

window.addEventListener('scroll', openModalByScroll)

closeBtn.addEventListener("click",closeModal);
    modal.addEventListener("click", function(e){
        if (e.target === modal) {
            closeModal()
    }
})

