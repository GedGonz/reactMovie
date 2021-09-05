import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { get } from '../services/movieApi';
import Card from './Card';

function Search() {

   
    const [movies, setmovies] = useState([])
    const [search, setSearch] = useState(["batman"])

    useEffect(()=>{
        searchMovies(search);
        
    },[search])
    

    const handleChage = (e)=>{
        setSearch(e.target.value)
    }

    const searchMovies= (text)=>{
        get(`search/movie?query=${text}`).then(resp=>{
            setmovies(resp.data.results);
        })
    }


    return (

        <Fragment>
        <div className="col-md-4 offset-md-4">
            <form >
                <div className="input-group mb-3">
                    <input type="text" className="form-control text-center" placeholder="search movie" aria-label="search movie" onChange={handleChage}/>
                </div>
            </form>
        </div>
        <br/>

        
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

export default Search
