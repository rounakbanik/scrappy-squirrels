import Resource from './Resource';
import './Resources.css';
import RESOURCES from '../data/resources-data';
import { forwardRef } from 'react';

const Resources = forwardRef((props, ref) => {
    return (
        <section className='resources' id='resources' ref={ref}>
            <div className='res-container'>
                <h2>Resources</h2>
                <p>For a full list of all things NFT, join our Discord channel!</p>
                <div className='res-items'>
                    {
                        RESOURCES.map(res => <Resource {...res} key={res.heading} />)
                    }
                </div>
            </div>
        </section>
    )
})

export default Resources;