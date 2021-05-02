import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {

    if(history.location.pathname === path) {
        return { color: '#000' }
    }
    else{
        return { color: '#fff' }
    }

}


const Menu = (props) => {


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    
                        <Fragment>
                            <li className="nav-item">
                                <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Connexion</Link>
                            </li>

                        </Fragment>
                </ul>
                
            </div>
            </nav>

        </div>
    )
}

export default withRouter(Menu) 
