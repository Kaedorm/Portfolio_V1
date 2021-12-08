import React from 'react';
import Navigation from '../components/Navigation';
import FormerXp from '../components/formerLife/Carousel';

const FormerLife = () => {
    return ( 
        <div className="carousel">
            <Navigation/>
            <div className="carouselContent">
                <div className="resume">
                <h1>Expériences professionnelles.</h1>
                <p>Avant d'initier mon projet de reconversion professionelle, j'ai pu engranger une solide expérience de commercial sédentaire et gérant de centre. Les qualités développées durant ces années telles que la communication orale et écrite, la négociation, la gestion du temps et le management seront sans nul doute de précieux atouts pour ma future carrière de développeur.</p>
                </div>

                <div className="content">
                <FormerXp/>
                </div>
            </div>
        </div>

    )
};

export default FormerLife;