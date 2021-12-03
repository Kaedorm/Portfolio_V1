import React from 'react';
import Navigation from '../components/Navigation';
import cv from '../media/CV_TRON_Frederic.pdf'

const Home = () => {
    return (
        <div className="home">
          <Navigation />
          <div className="homeContent">
            <div className="content">
              <h1>Frédéric Tron</h1>
              <h2>Développeur web</h2>
              <div className="pdf">
                <p className="presentation">
                  Ayant terminé il y a peu la formation de développeur web et web mobile "fullstack JS" proposée par l'école O'clock, je désire parachever ma transition professionnelle en trouvant un poste de développeur, front-end ou back-end Javascript, dans la région d'Aix-Marseille ou en téléprésentiel. 
                </p>
                <a href = {cv} rel= "noopener noreferrer" target="_blank"> Mon CV en PDF</a>
              </div>
            </div>
          </div>




        </div>
    );
};

export default Home;