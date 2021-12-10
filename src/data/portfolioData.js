import KidozAnges from '../media/KidOzAnges.jpg';
import PortfolioPic from '../media/Portfolio.png';

export const portfolioData = [
    {
        id: 1,
        name: "Kid'Oz'Anges",
        languages: ['javascript', 'CSS', 'SQL', 'React', 'nodeJS'],
        languagesIcons: ['fab fa-js', 'fab fa-css3-alt', "fas fa-database", "fab fa-react", "fab fa-node"],
        source: 'https://github.com/Kaedorm/KidOzAnges-API-Back',
        url: 'https://kidozanges.netlify.app/',
        info: "Le projet de fin d'étude, que nous avons mené à 5. Il s'agit d'un site participatif pour les parents en manque d'idée lorsqu'ils doivent trouver des activités pour leurs enfants. Ils peuvent rechercher et soumettre une activité par ville. Un gestion admin a également été mise en place. Mon rôle sur ce projet était double. Product Owner tout d'abord, j'ai porté l'idée et j'ai du communiquer celle-ci à mes coéquipiers tout au long du projet, et développeur back-end. Enfin, j'ai également pu peaufiné quelques aspect esthétiques en front-end.",
        picture: KidozAnges
    },

    {
        id: 2,
        name: "Mon Portfolio",
        languages: ['javascript', 'CSS', 'React',],
        languagesIcons: ['fab fa-js', 'fab fa-css3-alt', "fab fa-react"],
        source: 'http://www.github.com',
        url: 'https://google.fr/',
        info: "Le présent protfolio, il s'agit de ma première réalisation développée avec React. Il est entièrement responsive. ",
        picture: PortfolioPic
    }
];