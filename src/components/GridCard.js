import React, { useEffect, useState } from 'react'
import { get } from '../services/movieApi';
import '../components/GridCard.css';
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
                movies.map(movie=>  
                <div className="col-md-4 px-5" key={movie.id}>
                    <img  className="cardMovie" src={imageUrl+movie.backdrop_path} />
                    <p className="text-center">{movie.title}</p>
                </div>
                )
            }
           
        </div>
    )
}

export default GridCard
