import axios, { AxiosResponse } from 'axios';

export type Photo = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
    
  };
  likes: number;
  user: {
    username: string;
    profile_image: {
      medium: string;
    };
  };
};

type FetchPhotosReturnType = Promise<Photo[]>;

async function fetchPhotos(keyword: string, page: number): FetchPhotosReturnType {
  const instance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: { 'Accept-Version': 'v1' },
    params: {
      client_id: '5RTzoeWBx59VxVJJ35nR2YNpjl-WFFkqyyd0ucS7lrM',
      query: keyword,
      page,
      per_page: 12,
    },
  });
  try {
    const response: AxiosResponse<{ results: Photo[] }> = await instance.get('/search/photos');
    return response.data.results;
  } catch (error) {
    console.error('ErrorMessage fetching photos:', error);
    throw error;
  }
}

export default fetchPhotos;