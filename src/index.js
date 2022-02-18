// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
import './css/styles.css';
import  { fetchImages }  from './api/fetchImg';
import getRefs from './get-refs';
import {renderCardImg} from './render-card-img'

const refs = getRefs();
let page = 1;


refs.formEl.addEventListener('submit', onSearchFormSubmit);


async function onSearchFormSubmit(evt) {
    try {
        evt.preventDefault();
        clearImgList();
        if (refs.inputEl.value.trim() === '') {
            clearImgList();
            return
        }   
        const images = await fetchImages(refs.inputEl.value);
        if (parseInt(images.totalHits) === 0) {
            clearImgList();
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        }
        renderImgList(images);
    } catch (error) { console.log(error) }
}

refs.btnLoadMore.addEventListener('click', onBtnLoadMoreClick);

async function onBtnLoadMoreClick() {
    try {
        page += 1;
        const images = await fetchImages(refs.inputEl.value, page);
        const totalPages = images.totalHits / 40;
        if (page > totalPages) {
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
        }
        renderImgList(images);
    } catch (error) { console.log(error) }
}

const clearImgList = () => {
  refs.conteinerImgs.innerHTML = '';
}

const renderImgList = (images) => {
    const imagesCards = images.hits.map((hit) => renderCardImg(hit));
    refs.conteinerImgs.append(...imagesCards) 
}

// варианты через then

// function onSearchFormSubmit(evt) {
//     evt.preventDefault();
//     clearImgList();
//     if (refs.inputEl.value.trim() === '') {
//         clearImgList();
//         return
//     }   
//     const formElements = evt.currentTarget.elements;
//     const searchQuery=formElements.searchQuery.value
//     console.log(searchQuery)
//     fetchImages(searchQuery)
//         .then(data => {
//             if (parseInt(data.totalHits) === 0) {
//                 clearImgList();
//                 Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//             }
//             renderImgList(data);
//             // return page
//         })
//         .catch(error => {console.log(error)});
// }


// function onBtnLoadMoreClick() {
//     page += 1;
//     fetchImages(refs.inputEl.value, page)
//         .then(data => {
//             const totalPages = data.totalHits / 40;
//             if (page > totalPages) {
//                 Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
//             }
//             renderImgList(data);
//         })
//         .catch(error => {console.log(error)});
// }
