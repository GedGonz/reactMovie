import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { get } from '../services/movieApi';
import '../components/GridCard.css';
import Card from '../components/Card';

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
                  
                    <Link to={"/detail/" + movie.id}>
                        <Card movie={movie}/>
                        <p className="text-center fw-bold">{movie.title}</p> 
                    </Link>
                </div>
                )
            }
           
        </div>
    )
}

export default GridCard
