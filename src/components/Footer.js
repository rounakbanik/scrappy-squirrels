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
                    <a href='https://discord.com'>
                        <img src={discord_white} alt="Discord" />
                    </a>
                </div>
                <div>
                    <a href='https://instagram.com'>
                        <img src={instagram_white} alt="Instagram" />
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com'>
                        <img src={twitter_white} alt="Twitter" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;