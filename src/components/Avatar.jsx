import React from 'react'

function Avatar(props) {
    const style = (props.imageUrl=='../not_found.jpg')?'cardMovieNotFound':props.classname;
    return (<img alt="movies" className={style} src={props?.imageUrl} />)
}

export default Avatar
