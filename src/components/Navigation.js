import React from 'react';
import ProfilePic from '../media/ProfilePic.jpg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <h3>Frédéric Tron</h3>
                    <img src={ProfilePic} alt="Profile Pic"/>
                </div>
            </div>

            <div className="navigation">
                <ul>
                <li>
                   <NavLink exact to="/" activeClassName="navActive">
                    <i className="fa fa-home"></i>
                    <span>Accueil</span>
                   </NavLink>
                </li>
                <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                    <i className="fa fa-mountain"></i>
                    <span>Compétences</span>
                   </NavLink>
                </li>
                <li>
                   <NavLink exact to="/portfolio" activeClassName="navActive">
                     <i className="fa fa-images"></i>
                     <span>Portfolio</span>
                   </NavLink>
                </li>
                <li>
                   <NavLink exact to="/formerlife" activeClassName="navActive">
                     <i className="fa fa-backward"></i>
                     <span>Ma vie avant</span>
                   </NavLink>
                </li>
                <li>
                   <NavLink exact to="/contact" activeClassName="navActive">
                     <i className="fa fa-address-book"></i>
                     <span>Contact</span>
                   </NavLink>
                </li>
                </ul>
            </div>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/frederictron/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
                        </li>
                        < li >
                            <a href="https://github.com/Kaedorm?tab=repositories" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i></a>

                        </li>
                    </ul>

                    <div className="signature">
                        <p>Kae - 2021</p>
                    </div>
                </div>



        </div>
    );
};

export default Navigation;