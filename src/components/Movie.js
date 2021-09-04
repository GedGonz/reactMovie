import React,{ useEffect, useState } from "react"
import { useParams } from "react-router";
import { get } from "../services/movieApi";
import Card from "../components/Card";


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

    return (
        
        <div className="text-center">
            <Card movie={movi}/>
        </div>
    )
}

export default Movie
