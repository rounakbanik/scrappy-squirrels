import './About.css';
import sq1 from '../images/gallery-1.jpg';
import sq2 from '../images/gallery-2.jpg';
import sq3 from '../images/gallery-3.jpg';
import Aos from 'aos';

function About() {
    setTimeout(() => Aos.init({ duration: 1000 }), 600);

    return (
        <section className='about'>
            <div className='about-container'>
                <h2>About the Squirrels</h2>
                <div className='about-gallery'>
                    {[sq1, sq2, sq3].map(img_src =>
                        <div>
                            <img src={img_src}
                                alt='Sample Squirrel'
                                key={Math.random().toString()} />
                        </div>
                    )}
                </div>
                <div className='about-text' data-aos="slide-right">
                    <p>
                        Scrappy Squirrels is a set of artwork generated programmatically using over 100 traits (to see how, <a href='https://github.com/rounakbanik/generative-art-nft' target='_blank' rel='noreferrer'>click here</a>). The squirrels were designed with the following characteristics in mind: <b>curiousity, boldness, sociability, and (obviously) scrappiness.</b>
                    </p>
                    <p>
                        Through this project, we are building a community of:
                        <ul>
                            <li><b>Developers</b>, who are solving tough technical challenges across innovative companies</li>
                            <li><b>Designers</b>, who are creating incredible art and making crypto more accessible to the masses</li>
                            <li><b>Entrepreneurs</b>, who are making bold bets and building the next big thing</li>
                        </ul>
                    </p>

                    <p>
                        If this sounds like you, join our community today! To make this project accessible to all, we are giving away <b>50% of our NFTs for free</b> (up to one free NFT per wallet). Post this, squirrels will be priced at 0.05 ETH apiece.
                    </p>
                    <p>

                    </p>
                    {/*<p>
                        The Scrappy team being educators and innovators are continuously building tools and resources to help people advance into web3. Finally, these NFTs also get you access to an exclusive community, guilds, exclusive content, and much more!
                        </p>*/}
                </div>
            </div>
        </section>
    )
}

export default About;