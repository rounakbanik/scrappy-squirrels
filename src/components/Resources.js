import Resource from './Resource';
import './Resources.css';
import RESOURCES from '../data/resources-data';
import { forwardRef } from 'react';

const Resources = forwardRef((props, ref) => {
    return (
        <section className='resources' id='resources' ref={ref}>
            <div className='res-container'>
                <h2>Resources</h2>
                <p>Here is a list of tools and resources we've built so far. To know more, join our Discord channel!</p>
                <div className='res-items'>
                    {
                        RESOURCES.slice(0, 3).map(res => <Resource {...res} key={res.heading} />)
                    }
                </div>
                <div className='res-items'>
                    {
                        RESOURCES.slice(3, 4).map(res => <Resource {...res} key={res.heading} />)
                    }
                </div>
            </div>
        </section>
    )
})

export default Resources;