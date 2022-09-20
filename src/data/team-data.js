import rony from '../images/team/00002.png';
import yoda from '../images/team/00011.png';

var emoji = require('node-emoji');
const em = emoji.get('coffee');
console.log(em);

const TEAM = [
    {
        name: 'Rounak',
        twitter: 'https://twitter.com/Rounak_Banik',
        avatar: rony,
        description: 'Writer, Engineer, and Data Scientist.',
    },
    {
        name: 'Aniket',
        twitter: 'https://twitter.com/scrappyyoda',
        avatar: yoda,
        description: 'Entrepreneur, and Founder of DisruptX'

    }
]

export default TEAM;