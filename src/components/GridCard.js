import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { get } from '../services/movieApi';
import '../components/GridCard.css';
import Card from '../components/Card';
import Spinner from './Spinner';

function GridCard() {

const [movies, setmovies] = useState([])
const [active, setActive] = useState(false)

    useEffect(()=>{
        getMovies();
        
    },[])
    
    const getMovies= ()=>{
        setActive(true);
        get('discover/movie').then(resp=>{
            setmovies(resp.data.results);
            setActive(false);
        })
    }

    return (
        <Fragment>
            <Spinner active={active}/>
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
