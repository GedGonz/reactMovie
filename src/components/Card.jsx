import React from 'react'
import { useParams } from 'react-router';
import Avatar from '../components/Avatar';
import "./Card.css";

function Card(props) {

    let { id } = useParams();
    let path = id? '../not_found.jpg':
                   'not_found.jpg';

    const imageUrl =(props.movie.poster_path)? `https://image.tmdb.org/t/p/w${props.classname==="cardMovies"?"200":"500"}${props.movie.poster_path}`:
                                                path; 
    return (
            <Avatar imageUrl={imageUrl} classname={props.classname}/>
           )
}

export default Card