import React, { Fragment, useEffect, useState } from 'react'
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
            setmovies(resp.data.results);
        })
    }

    return (
        <Fragment>
        
        <div className="text-center gradinTitle">Tops Movies</div>

        <div className="row  mt-4">
            {
                movies.map(movie=>  
                <div className="col-md-2 px-5" key={movie.id}>
                  
                    <Link to={"/detail/" + movie.id} >
                        <Card movie={movie} classname="cardMovies"/>
                        <p className="mt-1 text-center fw-bold gradinText">{movie.title}</p> 
                    </Link>
                </div>
                )
            }
           
        </div>
        </Fragment>

    )
}

export default GridCard
