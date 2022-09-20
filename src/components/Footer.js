import './Footer.css';
import twitter_white from '../images/twitter.png';
import discord_white from '../images/discord.png';
import opensea from '../images/opensea.png';
import disruptX from '../images/disruptx_logo.jpeg';

function Footer() {
    return (
        <footer className='footer'>
            <p>
                VERIFIED CONTRACT ADDRESS:<br />
                <a href="https://etherscan.io/address/0x059cfeb97a728b3d2cfe705c809b85780f4ff143" target="_blank" rel="noreferrer">0x059cfeb97a728b3d2cfe705c809b85780f4ff143</a>
            </p>
            <div className='footer-social-media-links'>
                <div>
                    <a href='https://discord.gg/8UqJXTX7Kd' target='_blank' rel='noreferrer'>
                        <img src={discord_white} alt="Discord" />
                    </a>
                </div>
                {/*<div>
                    <a href='https://www.instagram.com/scrappysquirrels/' target='_blank' rel='noreferrer'>
                        <img src={instagram_white} alt="Instagram" />
                    </a>
                </div>*/}
                <div>
                    <a href='https://opensea.io/collection/scrappy-squirrels' className='jt-social-links' target='_blank' rel='noreferrer'>
                        <img src={opensea} alt="Opensea" />
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/ScrappyNfts' target='_blank' rel='noreferrer'>
                        <img src={twitter_white} alt="Twitter" />
                    </a>
                </div>
            </div>
            <p>Developed with &hearts; by <a href="http://disruptx.tech/" target="_blank" rel="noreferrer"><img src={disruptX} className="disruptX" alt="disruptx" /></a></p>
        </footer>
    )
}

export default Footer;