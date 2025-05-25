import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderEl = document.querySelector('.js-loader');
export const loadMoreBtnEl = document.querySelector('.js-load-more-btn');
export const galleryEl = document.querySelector('.js-gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function imageTemplate(image) {
    return `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <ul class="image-info">
              <li class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${image.likes}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${image.views}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${image.comments}</span>
  </li>
  <li class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${image.downloads}</span>
  </li>
          </ul>
        </li>`
}

export function imagesTemplate(images) {
  return images.map(imageTemplate).join(' ');
}

export function refreshLightbox() {
  lightbox.refresh();
}

export function clearGallery() {
    galleryEl.innerHTML = '';
}

export function showLoader() {
    loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtnEl.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtnEl.classList.add('hidden');
}

export function notifyEndOfResults() {
  iziToast.info({
    title: 'Info',
    message: 'You have reached the end of the results.'
  });
}





