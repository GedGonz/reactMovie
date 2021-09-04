import React from 'react'
import Avatar from '../components/Avatar';
import "./Card.css";

function Card(props) {

    const imageUrl = "https://image.tmdb.org/t/p/w500" + props.movie.poster_path; 
    return (
        <div>
            <Avatar imageUrl={imageUrl} classname={props.classname}/>
        </div>
    )
}

export default Card