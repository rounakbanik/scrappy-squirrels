import './Membership.css';
import BENEFITS from '../data/benefits-data';
import Benefit from './Benefit';
import { forwardRef } from 'react';

const Membership = forwardRef((props, ref) => {
    return (
        <section className='roadmap' id='roadmap' ref={ref}>
            <div className='mbr-container'>
                <h2>Roadmap</h2>
                <div className='benefits'>
                    <div className='b-col-1'>
                        {
                            BENEFITS.map(benefit => <Benefit {...benefit} key={benefit.heading} />)
                        }
                    </div>
                </div>
            </div>

        </section>
    )
});

export default Membership;