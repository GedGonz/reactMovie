import React,{ Fragment, useEffect, useState } from "react"
import { useParams } from "react-router";
import { get } from "../services/movieApi";
import Card from "./Card";
import Spinner from './Spinner';

function Movie() {
    
    let { id } = useParams();

    const [movi, setmovi] = useState(0);
    const [active, setActive] = useState(false)

    useEffect(()=>{

        finMovie(id);

    },[id]);

    const finMovie = (id)=>{
        setActive(true);
        get(`movie/${id}`).then(resp=>{
            setmovi(resp.data);
            setActive(false);
        })

    }

    return (
       <Fragment>
           <Spinner active={active}/>
           <div className="row justify-content-md-center">
            <div className="col col-lg-1">
            </div>
            <div className="col-md-auto text-center">
                <Card movie={movi} classname="cardMovie"/>
            </div>
            <div className="col-md-4 mt-3">
                <p className="gradinTitle">{movi?.title}</p> 
                <span className="gradinItem fw-bold ">Description: </span>
                <div className="fw-light">{movi?.overview}</div>
                <span className="gradinItem fw-bold ">Production companies: </span>
                <div className="fw-light">{movi?.production_companies?.map(x=>x.name)?.join(", ")}</div>
                <span className="gradinItem fw-bold ">Production countries: </span>
                <div className="fw-light">{movi?.production_countries?.map(x=>x.name)?.join(", ")}</div>
                <span className="gradinItem fw-bold ">Release date: </span>
                <div className="fw-light">{movi?.release_date}</div>
                <span className="gradinItem fw-bold ">Language: </span>
                <div className="fw-light"> {movi?.original_language}</div> 
                <span className="gradinItem fw-bold ">Genres: </span>
                <div className="fw-light">{movi?.genres?.map(x=>x.name)?.join(", ")}</div>
                <span className="gradinItem fw-bold ">Site: </span>
                <div className="fw-light"><a className="white" href={movi?.homepage}>web</a></div>
            </div>
            
           
        </div>
       </Fragment>
        

    )
}

export default Movie
