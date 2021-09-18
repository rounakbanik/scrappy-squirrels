import './About.css';
import sq1 from '../images/gallery-1.png';
import sq2 from '../images/gallery-2.png';
import sq3 from '../images/gallery-3.png';

function About() {
    return (
        <section className='about'>
            <div className='about-container'>
                <h2>About the Squirrels</h2>
                <div className='about-gallery'>
                    {[sq1, sq2, sq3].map(img_src => <img src={img_src}
                        alt='Sample Squirrel'
                        key={Math.random().toString()} />)}
                </div>
                <p>
                    The Scrappy Squirrels are a set of extremely basic artwork generated programmatically (to see how, <a href='https://github.com/rounakbanik/generative-art-nft' target='_blank' rel='noreferrer'>click here</a>). Priced at <b>0.03 ETH</b> and with less than 60 traits to work with, these squirrels serve as the perfect gateway NFT purchase.
                </p>
                <p>
                    Learn about traits, perceived rarity, signaling, and price movements without having to invest a fortune.
                </p>
            </div>
        </section>
    )
}

export default About;