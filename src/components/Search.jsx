import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { get } from '../services/movieApi';
import Card from './Card';
import Spinner from './Spinner';

function Search() {

   
    const [movies, setmovies] = useState([])
    const [search, setSearch] = useState([""])
    const [active, setActive] = useState(false)

    useEffect(()=>{
        searchMovies(search);
        
    },[search])
    

    const handleChage = (e)=>{
        setSearch(e.target.value)
    }

    const searchMovies= (text)=>{
        
        setActive(true);
        const uri = (text?.length>1)? `search/movie?query=${text}`:
                                      'discover/movie';
        
        get(uri).then(resp=>{            
            setmovies(resp.data.results);
            setActive(false);
        }).catch(error => {
           
           });
    }


    return (

        <Fragment>
            <Spinner active={active}/>
            <div className="col-md-4 offset-md-4 mt-5">
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
