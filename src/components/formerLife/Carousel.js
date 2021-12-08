import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

class FormerXp extends Component {
  state = {
    items: [
      { id: 1, 
        title: 'Responsable Centre de profit',
        when: '2015-2020',
        where: 'ANNEXX',
        entreprise:"La société Annexx implante et exploite des centres de profit spécialisés dans la location d'espaces de stockage pour particuliers et professionnels, ainsi que de bureaux locatifs et d'un espace de coworking. Elle compte désormais plus de 20 sites en France.",
        role: "Présent dès l'ouverture du site, j'étais chargé du développement commercial du centre de Marseille (plus de 6000m² d'entrepôt et 400m² de bureaux.), de la prospection, de la relation client, du reporting, du suivi comptable, du recouvrement des impayés, et du bon fonctionnement général du site (prestataires, fournisseurs...), et supervision des différentes phases de travaux d'aggrandissement."
      },
      { id: 2,
        title: 'Responsable adjoint de Centre de profit',
        when: '2008-2015',
        where: 'SHURGARD',
        entreprise:"La société Shurgard, filiale de Public Storage, est N°1 mondial du centre de stockage, avec plus de 2000 points aux Etats-Unis et plus de 200 en Europe.",
        role: "En tant que responsable adjoint, je devais seconder voire suppléer le manager dans ses missions. Avec une orientation commerciale plus forte, j'ai pu exercer dans de nombreux centres différents (Marseille Bonneveine, Marseille Arnavaux, Avignon, La seyne/mer, Aix-en-Provence...), touchant une clientèle extrêmement variée."
      },
      { id: 3,
        title: 'commercial B2B export',
        when: '2006-2008',
        where: 'AXIS INFORMATIQUE',
        entreprise: "Axis informatique était une PME spécialisée dans l'achat, le reconditionnement et la revente de matériel infortique d'occasion, sur le marché national principalement.",
        role: "Mon rôle, commercial B2B export, a été de développer les transactions internationales, principalement l'Afrique anglophone, l'Inde et le Pakistan, mais l'Espagne et l'Italie. En plus des négociations, je devais gérer le fret des marchandises."
      },
    ]
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