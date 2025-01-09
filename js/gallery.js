//Gallery buttons
document.addEventListener('DOMContentLoaded', function() {
const itemsPerPage = 10;
const galleryItems = document.querySelectorAll('.gallery__item');
const totalItems = galleryItems.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
let currentPage = 0;

const updateGallery = () => {
  galleryItems.forEach((item, index) => {
    item.style.display =
    index >= currentPage * itemsPerPage &&
    index < (currentPage + 1) * itemsPerPage
    ? "block"
    : "none";
  });
};

const nextPage = () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateGallery();
  }
};

const prevPage = () => {
  if (currentPage > 0) {
    currentPage--;
    updateGallery();
  }
};

document
.querySelector(".gallery__buttons-right")
.addEventListener("click", nextPage);

document
.querySelector(".gallery__buttons-left")
.addEventListener("click", prevPage);

updateGallery();
});
