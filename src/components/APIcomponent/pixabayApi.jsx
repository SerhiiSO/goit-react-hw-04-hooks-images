import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = 'key=25490777-2846f5fac0fd07fd3eae179c4';

export default async function fetchImages(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}
