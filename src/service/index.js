import axios from 'axios';

const apiUrl = 'https://www.majorcineplex.com/apis/get_movie_avaiable';

export const getMovieListApi = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
