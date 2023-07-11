// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);
imagesList.insertAdjacentHTML('beforeend', imagesMarkup);


function createGallery(images) {
    return images.map(({original, description, preview}) => {
    return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
    `
    }).join('');
};

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
});