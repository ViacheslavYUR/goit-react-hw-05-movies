import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '2134d13c1835ef13ec8cd549d2172bad',
  },
});

export const fetchTrending = async page => {
  const mediaType = 'movie';
  const time = 'week';
  const { data } = await instance.get(`/trending/${mediaType}/${time}?page=${page}`);
  return data;
};

export const fetchMovies = async (page, query) => {
  const { data } = await instance.get(`/search/movie?page=${page}&query=${query}`);
  return data;
};

export const fetchMovieById = async movieID => {
  const { data } = await instance.get(`/movie/${movieID}`);
  return data;
};

export const fetchCredits = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchReviews = async movieID => {
  const { data } = await instance.get(`/movie/${movieID}/reviews`);
  return data;
};
