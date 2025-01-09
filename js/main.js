document.addEventListener('DOMContentLoaded', function() {
  const leftArrow = document.querySelector('.wrapper__arrow-left');
  const rightArrow = document.querySelector('.wrapper__arrow-right');
  const images = document.querySelectorAll('.wrapper__images img');
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  rightArrow.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  });

  leftArrow.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  });
});


const projectsButton = document.getElementById('projectsBtn');

projectsButton.addEventListener('click', () => {
  window.location.href = 'projects.html';
});


//Gallery buttons
