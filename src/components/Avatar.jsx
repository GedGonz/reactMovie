import React from 'react'

function Avatar(props) {
    return (
        <div>
            <img alt="movies" className={props.classname} src={props?.imageUrl} />
        </div>
    )
}

export default Avatar
