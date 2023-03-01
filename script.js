//Capturo los elementos
let buttons = document.querySelectorAll('.show-modal')
let cross = document.querySelector('.close-modal')
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')

//Asigno los listeners
buttons.forEach((element) => element.addEventListener('click', showModal))
cross.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)
document.addEventListener('keydown', hideModalEsc)

//Genero las funciones
function showModal() {
  modal.style.display = 'initial'
  overlay.style.display = 'initial'
}
function hideModal() {
  modal.style.display = 'none'
  overlay.style.display = 'none'
}
function hideModalEsc(e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none'
    overlay.style.display = 'none'
  }
}
