import './Jumbotron.css';
import squirrels from '../images/squirrels.gif';
import ig from '../images/ig.png';
import dc from '../images/dc.png';
import twttr from '../images/twttr.png';

function Jumbotron() {
    return (
        <section className='jumbotron'>

            <div className='jt-container'>
                <div className='jt-image'>
                    <img src={squirrels} alt='Gallery of Squirrels' />
                </div>
                <div className='jt-content'>
                    <h1>Scrappy <br className='desktop-only' /> Squirrels</h1>
                    <p>
                        Scrappy Squirrels is a collection of 10,000 randomly generated NFTs on the Ethereum Blockchain. Scrappy Squirrels are meant for buyers, creators, and developers who are completely new to the NFT ecosystem.
                    </p>
                    <p>
                        The community is built around learning about the NFT revolution, exploring its current use cases, discovering new applications, and finding members to collaborate on exciting projects with.
                    </p>
                    <div className='jt-social-links'>
                        <a href='https://twitter.com/ScrappyNfts' target='_blank' rel='noreferrer'>
                            <img src={twttr} alt='Twitter'></img>
                        </a>
                        <a href='https://discord.gg/5WeaXPjDrb' target='_blank' rel='noreferrer'>
                            <img src={dc} alt='Discord'></img>
                        </a>
                        <a href='https://www.instagram.com/scrappysquirrels/' target='_blank' rel='noreferrer'>
                            <img src={ig} alt='Instagram'></img>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Jumbotron;