import React from 'react'
import './Navbar.css';
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPortrait, faSignInAlt } from '@fortawesome/fontawesome-free-solid'



 function Navbar() {
    return (
        <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-2"><img src={logo} alt="logo" style={{width : '120px'}}></img></a>
          <form className="d-flex">   
          <div className="my-button container"> <button className="btn btn-raised shadow my-button w-xs bg-white">Sign in&nbsp;<FontAwesomeIcon icon={faSignInAlt} /></button>
          </div>
            
          </form>
        </div>
      </nav>
      
    );
}
export default Navbar;