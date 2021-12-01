import React, { Component } from 'react';
import ProgressBar from './ProgressBar'

class Languages extends Component {
    state = {
        languages:[
            {id:1, value: 'Javascript', xp: 1.9},
            {id:2, value: 'CSS', xp: 1.8},
            {id:3, value: 'SQL', xp: 1.8},
            {id:4, value: 'HTML', xp: 1.9},
        ],
        frameworks:[
           {id:1, value: 'NodeJs', xp: 2}, 
           {id:2, value: 'React', xp: 0.8},
           {id:3, value: 'sass', xp: 0.6},
           {id:4, value: 'Semantic UI', xp: 0.6},
        ],
    }
    render() {
        let { languages, frameworks } = this.state; 

        return (
            <div className="languagesFrameworks">
               <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="Langages"
               />
               <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks & bibliothèques"
               />
            </div>
        );
    }
}

export default Languages;