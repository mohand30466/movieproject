// import axios from "axios";
const KEY='a7e9c370e61b1d79b17b64c1004c4cfa'
export const tmdbNewestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&year=2020&vote_count.gte=500&vote_average.gte=5`);
    const data = await response.json()
    return data;
  
}

export const fetchMovieWithId = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&year=2020&vote_count.gte=500&vote_average.gte=5`);
    const data = await response.json()
    return data;
  

}


  