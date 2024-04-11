const btnMenu = document.querySelector('#menu-tlacitko');

btnMenu.addEventListener('click', (event) => {
  const btnItems = document.querySelector('#menu-polozky');
  btnItems.classList.toggle('show');
  const btnElm = document.querySelector('i');
  if (btnElm.classList.contains('fa-bars')) {
    btnElm.classList.remove('fa-bars');
    btnElm.classList.add('fa-xmark');
  } else {
    btnElm.classList.add('fa-bars');
    btnElm.classList.remove('fa-xmark');
  }
});
