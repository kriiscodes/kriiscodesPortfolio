

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});



const openBtn = document.querySelector('.btnFill');
const modal = document.getElementById('about');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
  document.body.classList.add('modal-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
});