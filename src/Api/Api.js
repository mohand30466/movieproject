// import axios from "axios";
// const OMDBKEY = 'eb26ffd2'

const KEY='a7e9c370e61b1d79b17b64c1004c4cfa';
export const tmdbNewestMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=20&release_date.gte=2020&year=2020&vote_average.gte=2&vote_average.lte=5`);
    const data = await response.json()
    return data;
  
}

export const fetchMovieWithId = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=20&release_date.gte=2020&year=2020&vote_average.gte=2&vote_average.lte=5`);
    const data = await response.json()
    return data;
  

}

// export const omdbmoviesdata = async () => {
//     const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDBKEY}&?t=i&y=t`);
//     const odata = await response.json()
//     return odata;
  

// }



  