import React from 'react';

const ProgressBar = (props) => {
    console.log(props);
    return (
        <div className= {props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Aisance</span>
                <span>Faible</span>
                <span>relative</span>
            </div>

             <div>
                {
                    props.languages.map((item) =>{
                        let xpLevel = 2;
                        let progressBar= item.xp / xpLevel * 100 + '%';
                        
                        return (
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{width: progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>

         </div>
    );
};

export default ProgressBar;