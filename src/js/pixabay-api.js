import axios from "axios";

export async function getImagesByQuery(query, page) {
   const url = 'https://pixabay.com/api/';
 
   const params = {
      q: query,
      page: page,
      per_page: 15,
      key: '50329765-c5f06c68786df4859fa5b0c64',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
   };
 
   const res = await axios.get(url, { params });
   return res.data;
}