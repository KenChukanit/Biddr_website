import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {

    function handleSignOut(){
        props.destroySession();
    }

    return (
       <nav className="navbar container">
        <div className= "navbar-container">

      
        <NavLink className ="navbar-index"to='/' >
            Home
        </NavLink>
        <NavLink className ="navbar-index"to='/auctions' >
            Auctions
        </NavLink>
        <NavLink className ="navbar-index"to='/auctions/new' >
            New Auction
        </NavLink>
        <span>
            {
                
                props.currentUser ? 
                (
                <>
                    <h3 className="nav-index">{props.currentUser.first_name}</h3> 
                    
                    <button className="button" onClick={handleSignOut}>Sign Out</button>
                </>
                )
                :(
                <>
                    <NavLink className="navbar-index" to='/sign_in'>
                        Sign In
                    </NavLink>
                    <NavLink className="navbar-index" to='/sign_up'>
                        Sign Up
                    </NavLink>
                </>
          
                )
            }
            </span>
        </div>


            
        </nav>
    )
}

export default Navbar
