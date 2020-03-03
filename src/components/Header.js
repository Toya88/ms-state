import React from 'react'
import Logo from './Logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="M-State Logo" />
                
        
            </div>
            <div className="title">
               <h1>mississippi state university <span>&trade;</span></h1>
                <h2>university libraries</h2> 
            </div>
            <div className="links">

                <ul className="list-inline">
                    <li>
                        <Link className="link" to="/about" title="About">About Me</Link>
                    </li>
                    <li>
                        <Link className="link" to="/home" title="Home">Home</Link>
                    </li>
                </ul>   
            </div>

        </header>
        </>
    )
}

export default Header