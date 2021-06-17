/////////////////////////////////
//////// PARCEL HOT
if (module.hot) {
  module.hot.accept();
}

/////////////////////////////////
//////// VARIABLES
const navBtn = document.querySelector('.mobilenav--btn');
const menuContainer = document.querySelector('.nav--container');

/////////////////////////////////
//////// TOGGLE MOBILE MENU

const toggleMenu = function () {
  menuContainer.classList.toggle('open');
};

navBtn.addEventListener('click', toggleMenu);
