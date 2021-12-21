import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header">

                </div>
                <div className="contactBox">
                  <h1>Me contacter</h1> 
                  <ul>
                      <li>
                          <i className = "fas fa-map-marker-alt" ></i>
                          <span>Rognac, 13340</span>
                      </li>

                      <li>
                          <i className = "fas fa-mobile-alt"></i> 
                          <CopyToClipboard text="0621872732">
                            <span className="clickInput" onClick={()=>{alert('N° de téléphone copié.')}}> 
                                06.21.87.27.32 
                            </span> 
                          </CopyToClipboard>
                      </li>
                      <li>
                          <i className = "fas fa-envelope"></i> 
                          < CopyToClipboard text = "frederic.tron.dev@gmail.com" >
                            <span className="clickInput" onClick={()=>{alert('email copié.')}}> 
                                frederic.tron.dev@gmail.com 
                            </span> 
                          </CopyToClipboard>
                      </li>

                    </ul> 
                </div>
            </div>
        </div>
    );
};

export default Contact;