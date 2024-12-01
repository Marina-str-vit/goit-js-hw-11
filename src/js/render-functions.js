const galleryList = document.querySelector('.image-cards');

galleryList.insertAdjacentHTML("beforeend", createMarkup(arrGalleryJson));

function createMarkup(arrGallery) {
  return arrGallery.map(({ preview, original, description }) => `
    <li class="image-cards-item">
        <a class="image-cards-link" href="${original}">
      <img
        class="image-cards-image"
        src="${preview}"
        alt="${description}"
        />
      </a>
    </li>
    `).join("");      
}

const lightbox = new SimpleLightbox('.image-cards a', {
  overlayOpacity: 0,
  captionsData: 'alt',
  captionDelay: 250,
  className: 'simple-lightbox',
});


console.log(SimpleLightbox);