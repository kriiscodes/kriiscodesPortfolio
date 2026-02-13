

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
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show'); 
});

// close modal when clicking outside the modal container
modal.addEventListener('click', () => {
  modal.classList.remove('show');
});

// prevent closing when clicking inside the modal
const modalContainer = document.getElementById('modalContainer');
modalContainer.addEventListener('click', (e) => {
  e.stopPropagation();
});


const contactBtn = document.getElementById('contactBtn');
const contactBtnMobile = document.getElementById('contactBtnMobile');
const contactModal = document.getElementById('contactModal');
const closeContact = document.querySelector('.closeContact');

// open contact modal
const openContactModal = (e) => {
  e.preventDefault();
  contactModal.classList.add('show');
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
};

contactBtn.addEventListener('click', openContactModal);
if (contactBtnMobile) {
  contactBtnMobile.addEventListener('click', openContactModal);
}

// close button
closeContact.addEventListener('click', () => {
  contactModal.classList.remove('show');
});

// click outside
contactModal.addEventListener('click', () => {
  contactModal.classList.remove('show');
});

// stop propagation
contactModal.querySelector('.container').addEventListener('click', e => {
  e.stopPropagation();
});



