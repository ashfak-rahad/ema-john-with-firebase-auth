import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/review">OrderReview</NavLink>
            <NavLink to="/inventory">Inventory</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/Sign">SignUp</NavLink>
            <NavLink to="/login">Login</NavLink>
            
        </div>
    );
};

export default Header;