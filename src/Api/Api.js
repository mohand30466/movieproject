// import axios from "axios";
const OMDBKEY = "eb26ffd2";

const KEY = "a7e9c370e61b1d79b17b64c1004c4cfa";
export const tmdbNewestMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=first_air_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=20&release_date.gte=2020&vote_average.gte=4&vote_average.lte=7`
  );
  const data = await response.json();
  console.log(data);
  
  return data;
};

export const fetchMovieWithId = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  const data = await response.json();
  // console.log(data);
  return data;
};

export const omdbmoviesdata = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDBKEY}&i=${id}&t=`
  );
  const omdbdata = await response.json();
  // console.log(omdbdata);
  return omdbdata;
};

export const searchMovie = async (term) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${term}`
  );
  const dbImg = await response.json();
  // console.log(dbImg);

  return dbImg;
};

export const fetchtrailers = async (movie_id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${KEY}&language=en-US
    `
  );
  const movieplay = await response.json();

  return movieplay;
};

export const latestMovie = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&primary_release_year=2020&sort_by=vote_average.desc&language=en-US&include_adult=false&include_video=false&page=1&release_date.gte=2020&year=2020&vote_average.gte=4&vote_average.lte=5`
  );
  const latestdata = await response.json();
  // console.log(latestdata);

  return latestdata;
};

export const topRating = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&primary_release_year=2020&sort_by=vote_average.desc&language=en-US&include_adult=false&include_video=false&page=3&vote_average.gte=4&vote_average.lte=9.5`
  );
  const topratingdata = await response.json();
  console.log(topratingdata);

  return topratingdata;
};

export const actors = async (id) =>{
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`);
  const data = await response.json();
  console.log("this is actor data"+data);
  
  return data
}
