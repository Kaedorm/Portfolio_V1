import React, { Component } from 'react';
import ProgressBar from './ProgressBar'

class Languages extends Component {
    state = {
        frontend:[
            {id:1, value: 'Javascript', xp: 5},
            {id:2, value: 'CSS', xp: 6},
            {id:3, value: 'sass', xp: 1},
            {id:4, value: 'React', xp: 2},
        ],
        backend:[
            {id:1, value: 'NodeJs', xp: 5.5}, 
            {id:2, value: 'SQL', xp: 5},
            {id:3, value: 'Express', xp: 6},
            {id:4, value: 'GraphQL', xp: 1.5},
            {id:5, value: 'MongoDB', xp: 1},


        ],
    }
    render() {
        let { frontend, backend } = this.state; 

        return (
            <div className="languagesFrameworks">
               <ProgressBar 
                    languages={frontend}
                    className="languagesDisplay"
                    title="Front-end"
               />
               <ProgressBar 
                    languages={backend}
                    className="frameworksDisplay"
                    title="Back-end"
               />
            </div>
        );
    }
}

export default Languages;