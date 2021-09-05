import React, { Fragment } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


function Spinner(props) {

    return (
        <Fragment>
            {
            props.active?
                <div className="text-center spin">
                <ClipLoader color="#ffffff" loading={props.active}  size={150} />
                </div>
            :
                <div></div>

            }
           
        </Fragment>
       
    )
}

export default Spinner
