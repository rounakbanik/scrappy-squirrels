import './About.css';
import sq1 from '../images/Developer.png';
import sq2 from '../images/Designer.png';
import sq3 from '../images/Founder.png';

function About() {
    const jobArr = ['Developer', 'Designer', 'Founder'];
    var idx = 0;

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
                        <h3 className='job'>{jobArr[idx++]}</h3>
                        </div>
                        )}
                </div>
                <div className='about-text'>
                    <p>
                        Squirrels are known to exhibit the following characteristics: <b>Curiosity, Boldness, Sociability and Attraction to Food.</b>
                        <br /><br />
                        That sounds very much like our community who is hustling hard in web3. <br /><br /> <b>The Developers</b>, who are solving the tough technical challenges across innovative companies
                        <br /><br /><b>The Designers</b>, who are bringing the pandoras box of crypto to the common man AND
                        <br /><br /><b>The Founders</b>, who hold it all together and take bold bets.
                        <br /><br />
                        The Scrappy Squirrels collection is minted to support these hustlers in their journeys. There will be a set of 14,917 NFTs generated programmatically using over 100 traits.
                    </p>
                    <p>
                        And the best part? <b>The first 7000 of these NFTs are free for our earliest supporters!</b>
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