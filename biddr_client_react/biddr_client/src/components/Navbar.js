import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {

    function handleSignOut(){
        props.destroySession();
    }

    return (
       <nav className="navbar">
        <div className= "navbar-container">

      
        <NavLink className ="navbar-index"to='/auctions' >
            Menu 
        </NavLink>
        
            {
                props.currentUser ? 
                (
                <div>
                    <h3 className="nav-index">{props.currentUser.username}</h3> 
                    
                    <button className="btn--outline" onClick={handleSignOut}>Sign Out</button>
                </div>
                )
                :(
                <div>
                    <NavLink className="navbar-cart" to='/sign_in'>
                        Sign In
                    </NavLink>
                    <NavLink className="navbar-cart" to='/sign_up'>
                        Sign Up
                    </NavLink>
                    
                </div>
                )
            }
        </div>


            
        </nav>
    )
}

export default Navbar
