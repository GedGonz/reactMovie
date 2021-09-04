import React,{ useEffect, useState } from "react"
import { useParams } from "react-router";
import { get } from "../services/movieApi";


function Movie() {
    
    let { id } = useParams();

    const [movi, setmovi] = useState(0);

    useEffect(()=>{
        finMovie(id);

    },[id]);

    const finMovie = (id)=>{

        get(`movie/${id}`).then(resp=>{
            setmovi(resp.data);
        })

    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movi.poster_path;
    return (
        
        <div className="text-center">
            <img alt="movies" className="cardMovie" src={imageUrl} />
            <p className="text-center fw-bold">{movi.title}</p> 
        </div>
    )
}

export default Movie
