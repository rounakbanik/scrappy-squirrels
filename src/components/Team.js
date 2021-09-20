import './Team.css';
import TeamMember from './TeamMember';
import TEAM from '../data/team-data';
import { forwardRef } from 'react';

const Team = forwardRef((props, ref) => {
    return (
        <section className='team' id='team' ref={ref}>
            <div className='team-container'>
                <h2>The Team</h2>
                <div className='team-gallery'>
                    {TEAM.map(mbr => <TeamMember key={mbr.name} {...mbr} />)}
                </div>
            </div>
        </section>
    )
})

export default Team;