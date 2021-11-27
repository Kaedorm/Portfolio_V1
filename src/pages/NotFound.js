import React from 'react';
import { NavLink } from 'react-router-dom'; 

const NotFound = () => {
    return (
        <div className="notFound">
           <div className="notFoundContent"></div>
           <h1>404</h1>
            <h3>Cette page n'a pas encore été développée!</h3>
            <NavLink exact to="/">
                <i className="fa fa-home"></i>
                <span> Accueil</span>
            </NavLink>
        </div>
    );
};

export default NotFound;