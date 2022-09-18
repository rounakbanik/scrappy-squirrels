import rony from '../images/team/00002.png';
import sketchsome from '../images/team/sketchsome.png';
import yoda from '../images/team/00011.png';

var emoji = require('node-emoji');
const em = emoji.get('coffee');
console.log(em);

const TEAM = [
    {
        name: 'Rounak',
        twitter: 'https://twitter.com/Rounak_Banik',
        avatar: rony,
        description: 'Solidity Sorcerer.'+emoji.get('mage')+'\n'+ 'Machine Learning Magician.'+ emoji.get('bar_chart') +'\n'+'Loves Educating. ' + emoji.get('teacher')
    },
/*    {
        name: 'Sketchsome',
        twitter: 'https://twitter.com/MuskanRaina97',
        avatar: sketchsome,
    },*/
    {
        name: 'Aniket',
        twitter: 'https://twitter.com/scrappyyoda',
        avatar: yoda,
        description: 'Eternal Hustler.'+ emoji.get('coffee') +'Daytime Dreamer.'+ emoji.get('cloud') +'Create, dont consume.' + emoji.get('computer')

    }
]

export default TEAM;