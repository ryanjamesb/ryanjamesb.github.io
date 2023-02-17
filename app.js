// Google Map Modal
const mapModal = document.getElementById('map-modal');
const mapModalOpenButton = document.getElementById('map-open-button');
const mapModalCloseButton = document.getElementById('map-close-button');


// Contact Modal
const contactModal = document.getElementById('contact-modal');
const contactModalOpenButton = document.getElementById('contact-open-button');
const contactModalCloseButton = document.getElementById('contact-close-button');

// Map Modal functions
mapModalOpenButton.addEventListener('click', () => {
  if (mapModal.classList.contains('active')) {
    mapModal.classList.remove('active');
  }
  else {
    mapModal.classList.add('active');
  }
})

mapModalCloseButton.addEventListener('click', () => {
  if (mapModal.classList.contains('active')) {
    mapModal.classList.remove('active');
  }
})

// Contact Modal functions
contactModalOpenButton.addEventListener('click', () => {
  if (contactModal.classList.contains('active')) {
    contactModal.classList.remove('active');
  }
  else {
    contactModal.classList.add('active');
  }
})

contactModalCloseButton.addEventListener('click', () => {
  if (contactModal.classList.contains('active')) {
    contactModal.classList.remove('active');
  }
})