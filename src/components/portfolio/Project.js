import React, { Component } from 'react';

class Project extends Component {
    state= 
    {
        showInfo: false
    };

    /* toggle Modal method */
    handleInfo = () => {
        this.setState({
          showInfo: !this.state.showInfo
        });
    };

    render() {
        let {name, languagesIcons, source, info, picture,url} = this.props.item; 

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                        )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="page d'accueil de Kid'oz'Anges" onClick={this.handleInfo}/>
                <span className="infos" onClick={this.handleInfo}>
                    <i className = "fas fa-info-circle"> </i>
                </span>

                {/* modal */}
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Voir le code</a>
                                    </div>
                                    <div className="sourceCode">
                                        <a href={url} rel="noopener noreferrer" className="button" target="_blank">Voir le site</a>
                                    </div>
                                </div>
                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfo}>Retour au portfolio</div>
                                
                            </div>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Project;