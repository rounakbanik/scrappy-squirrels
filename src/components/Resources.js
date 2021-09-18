import Resource from './Resource';
import './Resources.css';
import RESOURCES from '../data/resources-data';

function Resources() {
    return (
        <section className='resources'>
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
}

export default Resources;