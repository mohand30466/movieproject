import Api from '../Api'

export const MovieData = ()=>{
    const response = Api.get(`/movie/${id} `)
    return{
        type: 'MOVIE-DATA',
        payload: response
    }
}