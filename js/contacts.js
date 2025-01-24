document.addEventListener('DOMContentLoaded', () => {
  const contactsButton = document.getElementById('contactsformBtn');
  const contactsBtn = document.getElementById('contactsBtn');
  const contactsBtnForm = document.getElementById('contactsBtnForm');

  if (contactsButton) {
    contactsButton.addEventListener('click', () => {
      window.location.href = 'contact-form.html';
    });
  }

  if (contactsBtn) {
    contactsBtn.addEventListener('click', () => {
      window.location.href = 'contact-form2.html';
    });
  }

  if (contactsBtnForm) {
    contactsBtnForm.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});
