import React from 'react'
import Avatar from '../components/Avatar';
import "./Card.css";

function Card(props) {

    
    const imageUrl =(props.movie.poster_path)? `https://image.tmdb.org/t/p/w${props.classname==="cardMovies"?"200":"500"}${props.movie.poster_path}`:
                                                'not_found.jpg'; 
    
    return (
            <Avatar imageUrl={imageUrl} classname={props.classname}/>
           )
}

export default Card