export const renderCardImg = (data) => {
  const wrapper = document.createElement('div');

  wrapper.innerHTML = `
    <div class="photo-card">
        <img src="${data.webformatURL}" alt="${data.tags}" loading="lazy" />
    <div class="info">
        <p class="info-item">
        <b>Likes</b><br>${data.likes}
        </p>
        <p class="info-item">
        <b>Views</b><br>${data.views}
        </p>
        <p class="info-item">
        <b>Comments</b><br>${data.comments}
        </p>
        <p class="info-item">
        <b>Downloads</b><br>${data.downloads}
        </p>
    </div>
    </div>
  `;

  return wrapper.firstElementChild;
};

export default renderCardImg;