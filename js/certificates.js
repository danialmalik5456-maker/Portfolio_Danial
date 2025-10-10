// Select all certificate buttons
const certButtons = document.querySelectorAll('.cert_btn');
// Popup container
const popup = document.getElementById('certPopup');
// Image inside the popup
const popupImg = document.querySelector('.cert_popup .cert_image');
// Close button
const closeBtn = document.querySelector('.cert_popup .close');

// Show popup when a certificate button is clicked
certButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const imgSrc = btn.getAttribute('data-cert');
    popupImg.src = imgSrc;
    popup.style.display = 'flex';
  });
});

// Close popup when clicking the close button
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  popupImg.src = '';
});

// Close popup when clicking outside the image
popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popupImg.src = '';
  }
});
