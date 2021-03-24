import React from 'react'
import './Navbar.css';
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSignInAlt, faSignOutAlt, faPortrait } from '@fortawesome/fontawesome-free-solid'



 function Secondnavbar() {
    return (
        <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-2"><img src={logo} alt="logo" style={{width : '120px'}}></img></a>
          <form className="d-flex">
          <div className="current-user ml-4">Current User&nbsp;<FontAwesomeIcon icon={faPortrait} /></div> 
          <div className="my-button container"> <button className="btn btn-raised shadow my-button w-xs bg-white">Sign out&nbsp;<FontAwesomeIcon icon={faSignOutAlt} /></button>
          </div>
            
          </form>
        </div>
      </nav>
      
    );
}
export default Secondnavbar;