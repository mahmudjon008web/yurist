let modal = document.querySelector(".modal__window")
let openModal = document.querySelector(".last__box")
let closeModal = document.querySelector(".yurist2__x")
const audio = document.querySelector(".audio")

openModal.addEventListener("click", ()=>{
    audio.play();
    modal.classList.add("show")
})
closeModal.addEventListener("click", ()=>{
    audio.play();
    modal.classList.remove("show")
})