const btnMenu = document.querySelector('#menu-tlacitko');

btnMenu.addEventListener('click', (event) => {
  const btnItems = document.querySelector('#menu-polozky');
  btnItems.classList.toggle('show');
});

/* pokusy:)
let symbol;
if (symbol === document.querySelector('.fas fa-xmark')) {
  btnMenu.classList.add('fas fa-bars');
} else {
  btnMenu.classList.add('fas fa-xmarks');
}
*/
