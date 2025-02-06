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

$(document).ready(() => {
  $('#contactsBtn').click(() => {
    const name = $('input[name="name"]').val();
    const phone = $('input[name="phone"]').val();
    const email = $('input[name="email"]').val();
    const interested = $('textarea[name="interested"]').val();
    const message = $('textarea[name="message"]').val();

    if (!name || !email) {
      alert('Name and email are required!');
      return;
    }

    $.ajax({
      url: '/submit',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        interested: interested,
        message: message,
      }),
      success: (response) => {
        alert(response);
      },
      // error: (xhr, status, error) => {
      //   console.error('Error:', error);
      //   alert('Failed to save data. Please try again.');
      // },
    });
  });
});
