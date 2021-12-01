import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pieds</span>
                    <p>lorem dmddfslgkjqsdf mmlkj mlkj moli  pkmjh mkljh</p>
                </li>
                 <li className="hobby">
                    <i class = "fas fa-dice-d20"></i>
                    <span>Jeux de Rôles</span>
                    <p> lorem dmddfslgkjqsdf mmlkj mlkj moli pkmjh mkljh </p>
                </li>
                <li className = "hobby">
                    <i class = "fas fa-guitar"></i> 
                    <span>Guitare</span>
                    <p> lorem dmddfslgkjqsdf mmlkj mlkj moli pkmjh mkljh </p> 
                </li>
                <li className = "hobby">
                    <i class = "fas fa-fill-drip"></i> 
                    <span> Impression 3D </span>
                    <p> lorem dmddfslgkjqsdf mmlkj mlkj moli pkmjh mkljh </p> 
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;