import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
// const axios = require('axios');


export function fetchImages(searchQuery, page) {
  return fetch(`${BASE_URL}?key=25716572-e092d498007de7d313bf56634&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

// export function fetchImages(searchQuery, page) {
//   return axios.get(`${BASE_URL}?key=25716572-e092d498007de7d313bf56634&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.data.json();
//     }
//   );
// }

// axios.get(`${BASE_URL}?key=25716572-e092d498007de7d313bf56634&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`, {
//   // params: {
//   //   key: "25716572-e092d498007de7d313bf56634"
//   //     q:`${searchQuery}`
//   //   image_type: 'photo'
//   //   orientation: 'horizontal'
//   //   safesearch: true
//   //   per_page: 40
//   //   page: `${page}`
//   // }
// })
