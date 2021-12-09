import React from 'react';

const Languages = () => {
    return (
        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Projet de fin d'étude</h4>
                <h5>Novembre 2021</h5>
                <p>
                    L 'école O'clock nous a permis de terminer notre formation par un projet en autonomie de 4 semaines.Nous avons réalisé un site dans son intégralité.Nous avons conçu, réalisé et déployé le site.Notre équipe était composée de 5 étudiants aux profils variés. <br/> En tant que <em>Product owner</em>, j'ai du conceptualiser et présenter l'idée à mes coéquipiers, puis, veiller à la cohérence et au respect de l'idée tout au long de la réalisation.<br/ > Pour le développement j 'étais <em>développeur back-end</em>, puisque j'ai suivi la spécialisation DATA et API en fin de formation.Nous avons utilisé un datamapper, une base de données postgreSQL(que nous avons déployée sur Heroku, et versionné via Sqitch).J 'ai pu travailler sur les requêtes SQL, la gestion de la sécurité des formulaires, la sauvegarde des images sur un serveur S3 (AWS), ainsi que l'
                    authentification via JWT. <br/>
                    <a href = "https://youtu.be/fVoNDfbKTsY?t=970" target="_blank" rel="noopener noreferrer">La vidéo de présentation du site est disponible ici. </a>
                </p>
            </div>
            <div className="exp-2">
                <h4>Ce portfolio</h4>
                <h5>Novembre 2021</h5>
                <p>
                    Ma première réalisation utilisant React. J'ai créé ce site en m'inspirant de divers exemples et tutoriels, n'ayant jamais utilisé React auparavant.
                </p>
            </div>
        </div>
    );
};

export default Languages;