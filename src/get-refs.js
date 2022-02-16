export default function getRefs() {
  return {
    inputEl: document.querySelector('input'),
    formEl: document.querySelector('.search-form'),
    conteinerImgs: document.querySelector('.gallery'),
    btnLoadMore:document.querySelector('.load-more'),
  };
}