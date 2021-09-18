import './Membership.css';
import BENEFITS from '../data/benefits-data';
import Benefit from './Benefit';

function Membership() {
    return (
        <section className='membership'>
            <div className='mbr-container'>
                <h2>Become a Member.</h2>
                <div className='benefits'>
                    <div className='b-col-1'>
                        {
                            BENEFITS.slice(0, 3).map(benefit => <Benefit {...benefit} key={benefit.heading} />)
                        }
                    </div>
                    <div className='b-col-2'>
                        {
                            BENEFITS.slice(3, 6).map(benefit => <Benefit {...benefit} key={benefit.heading} />)
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Membership;