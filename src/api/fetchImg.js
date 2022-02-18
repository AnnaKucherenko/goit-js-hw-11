import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery, page) {
  try {
    const resp = await axios.get(`${BASE_URL}?key=25716572-e092d498007de7d313bf56634&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
    return resp.data;
  } catch (error) { console.log(error);}
  
}

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
