import React, { Component } from 'react';
import { formerLifeData } from '../../data/formerLifeData';
import Carousel from 'react-elastic-carousel';

class FormerXp extends Component {
  state = {
    items: formerLifeData, 
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => 
          <div key={item.id}>
             <h2>{item.title}</h2>
             <h3>{item.when} - {item.where}</h3>
             <p>{item.entreprise}</p>
             <p>{item.role}</p>
          </div>
        )}
      </Carousel>
    )
  }
};

export default FormerXp;