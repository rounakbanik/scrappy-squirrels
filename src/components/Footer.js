import './Footer.css';
import twitter_white from '../images/twitter.png';
import discord_white from '../images/discord.png';
import instagram_white from '../images/instagram.png';

function Footer() {
    return (
        <footer className='footer'>
            <p>VERIFIED SMART CONTRACT ADDRESS: <span>Coming soon!</span></p>
            <div className='footer-social-media-links'>
                <div>
                    <a href='https://discord.gg/8UqJXTX7Kd'>
                        <img src={discord_white} alt="Discord" />
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/scrappysquirrels/' target='_blank' rel='noreferrer'>
                        <img src={instagram_white} alt="Instagram" />
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/ScrappyNfts' target='_blank' rel='noreferrer'>
                        <img src={twitter_white} alt="Twitter" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;