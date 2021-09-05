import React from 'react'
import { Link } from 'react-router-dom'
import { FaSistrix } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';


export default function Nav() {
    return (
            <nav className="navbar navbar-dark bg-dark  mx-5">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-light" to="/">
                        Movies <RiMovie2Line />
                    </Link>
                    <Link className="navbar-brand fw-light" to="/search">
                       
                        Search  <FaSistrix /> 
                    </Link>



                </div>
            </nav>
    )
}
