import React, { useEffect, useState } from 'react'
import { get } from '../services/movieApi';
const imageUrl = "https://image.tmdb.org/t/p/w500";

function GridCard() {

const [movies, setmovies] = useState([])

    useEffect(()=>{
        getMovies();
        
    },[])
    
    const getMovies= ()=>{
        get('discover/movie').then(resp=>{
            console.log(resp.data.results);
            setmovies(resp.data.results);
        })
    }

    return (
        <div className="row">
            {
                movies.map(movie=>  <div className="col-md-3">
                    <img src={imageUrl+movie.backdrop_path} />
                </div>)
            }
           
        </div>
    )
}

export default GridCard
