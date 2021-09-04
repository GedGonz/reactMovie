import React,{ useEffect, useState } from "react"
import { useParams } from "react-router";
import { get } from "../services/movieApi";
import Card from "./Card";


function Movie() {
    
    let { id } = useParams();

    const [movi, setmovi] = useState(0);

    useEffect(()=>{

        finMovie(id);

    },[id]);

    const finMovie = (id)=>{

        get(`movie/${id}`).then(resp=>{
            console.log("datos: ",resp.data);
            setmovi(resp.data);
        })

    }

    return (
       
        <div className="row justify-content-md-center">
            <div className="col col-lg-1">
            </div>
            <div className="col-md-auto">
                <Card movie={movi}/>
            </div>
            <div className="col-md-4 mt-3">
                <p className="fs-1 fw-bold">{movi?.title}</p> 
                <div className="fw-light"><span className="fw-bold ">Description: </span>{movi?.overview}</div> <br/>
                <div className="fw-light"><span className="fw-bold ">Genres: </span>{movi?.genres?.map(x=>x.name)?.join(", ")}</div> <br/>
                <div className="fw-light"><span className="fw-bold ">Language: </span> {movi?.original_language}</div> 
            </div>
            
           
        </div>

    )
}

export default Movie
