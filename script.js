const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.onclick = function () {
  navbar.classList.toggle('active');
};
