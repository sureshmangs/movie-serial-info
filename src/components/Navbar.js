import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link style={{ fontSize: "2em", fontWeight: 'bold' }} className="navbar-brand" to="/">Movie-Serial-Info </Link>

                <div style={{ marginLeft: "auto" }} className="" id="navbarText">

                    <a style={{
                        color: '#f3ce00'
                    }} href="https://www.imdb.com/"><i className="fab fa-imdb fa-5x"></i></a>
                    < a style={{ marginLeft: "15px", color: '#61dafb' }} href="https://reactjs.org/"><i className="fab fa-react fa-5x"></i></a>
                </div>
            </nav>
        </div >
    )
}

export default Navbar;
