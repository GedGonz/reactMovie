import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="container-fluid navbar-brand fw-light" to="/">
                        Movies
                    </Link>
                </div>
            </nav>
        </div>
    )
}
