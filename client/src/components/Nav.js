import React from 'react';
import { NavLink } from 'react-router-dom';


export const Nav = () =>{
    return(
        <nav>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/products">Products</NavLink>
            <NavLink activeClassName="active" to="/create">Create Products</NavLink>
        </nav>
    )
}