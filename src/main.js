import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


import { getImagesByQuery } from './js/pixabay-api';
import {
    imageTemplate,
    imagesTemplate,
    galleryEl,
    clearGallery,
    showLoader,
    hideLoader,
    refreshLightbox,
    showLoadMoreButton,
    hideLoadMoreButton,
    loadMoreBtnEl,
    notifyEndOfResults
} from './js/render-functions';

const formEl = document.querySelector('.js-form');


let query;
let currentPage;
let maxPage;

//!======================================================
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
   
    query = e.target.elements['search-text'].value.trim();
    currentPage = 1;

    if (!query) {
        hideLoadMoreButton();
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term!'
        });
        return;
    }

    clearGallery();
    showLoader();

    let resultImages;
    try {
        resultImages = await getImagesByQuery(query, currentPage);

        if (resultImages.hits.length === 0) {
            iziToast.error({
                title: 'Oops...',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            hideLoadMoreButton();
        } else {
            const markup = await imagesTemplate(resultImages.hits);
            galleryEl.innerHTML = markup;

            maxPage = Math.ceil(resultImages.totalHits / 15);

            refreshLightbox();
            updateLoadMoreButton();
        }
        
    } catch(error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.'
        });
    } finally {
        hideLoader();
    }
})

//!======================================================
loadMoreBtnEl.addEventListener('click', async (e) => {
    currentPage++;

    try {
        const resultImages = await getImagesByQuery(query, currentPage);

        const markup = imagesTemplate(resultImages.hits);
        galleryEl.insertAdjacentHTML('beforeend', markup);

        refreshLightbox();

        const firstCard = document.querySelector('.gallery-item');
        if (firstCard) {
          const { height } = firstCard.getBoundingClientRect();
          window.scrollBy({
            top: height * 2,
            behavior: 'smooth'
          });
        }

        updateLoadMoreButton();
        if (currentPage === maxPage) {
            notifyEndOfResults();
        }
    } catch(error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later.'
        });
    }
})

//!======================================================
function updateLoadMoreButton() {
    if (!query || currentPage >= maxPage) {
        hideLoadMoreButton();
    } else {
        showLoadMoreButton();
    }
  }
