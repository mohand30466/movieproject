import React from 'react'
import './Showmovie.css'

const Showmovie =({data})=>{
    const ur = "https://image.tmdb.org/t/p/w300/";

    return(
        <div className="show-card">
      {data&&(
          <img className="show" src={`${ur}${data.poster}`}></img>
      
      )}
      <div className="play"><button>Play</button></div>
        </div>
    )
}
export default Showmovie;