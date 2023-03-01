let buttons = document.querySelectorAll('.show-modal')
function showModal() {
  let modal = document.querySelector('.modal')
  modal.style.display = 'initial'
}
buttons.forEach((element) => {
  element.addEventListener('click', showModal)
})
