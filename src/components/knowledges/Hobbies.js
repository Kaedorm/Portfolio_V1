import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pieds</span>
                    <p>Pratique régulière depuis 5 ans, en collines.</p>
                </li>
                 <li className="hobby">
                    <i className= "fas fa-dice-d20"></i>
                    <span>Jeux de Rôles</span>
                    <p>Crée et organise des scéances pour des groupes de joueurs depuis plus de 20 ans.</p>
                </li>
                <li className = "hobby">
                    <i className= "fas fa-guitar"></i> 
                    <span>Guitare</span>
                    <p>Joue seul ou en duo, depuis 15 ans.</p> 
                </li>
                <li className = "hobby">
                    <i className= "fas fa-fill-drip"></i> 
                    <span> Impression 3D</span>
                    <p>Création de figurines pour jeux sur tables. </p> 
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;