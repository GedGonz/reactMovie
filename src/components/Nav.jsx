import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
            <nav className="navbar navbar-dark bg-dark  mx-5">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-light" to="/">
                        Movies
                    </Link>
                    <Link className="navbar-text fw-light" to="/search">
                        Search
                    </Link>



                </div>
            </nav>
    )
}
