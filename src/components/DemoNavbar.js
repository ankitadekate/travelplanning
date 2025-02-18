import React from "react"
import { Link } from "react-router-dom"

export default function DemoNavbar() {
    const handleActive = (e) => {
        e.target.parentNode.parentElement.childNodes.forEach((i) => {
            const navList = i.childNodes[0].pathname;
            const selectedNav = e.target.pathname;
            i.childNodes[0].className = navList === selectedNav ? 'nav-link active' : 'nav-link';
        })
    }


    return (
        <div>

            <nav className="navbar  navbar-expand-lg  navbar-light" style={{ background: '#e3f2fd' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>Travel Planning</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={(e) => handleActive(e)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={(e) => handleActive(e)}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/trip" onClick={(e) => handleActive(e)}>Trips</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/review" onClick={(e) => handleActive(e)}>Reviews</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={(e) => handleActive(e)}>Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

