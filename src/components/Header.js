import './Header.css';
import twitter_white from '../images/twitter.png';
import discord_white from '../images/discord.png';
import instagram_white from '../images/instagram.png';
import hamburger from '../images/hamburger.jpeg';
import logo from '../images/logo.png';
import { Fragment, useState } from 'react';

function Header(props) {

    const [showMenu, setShowMenu] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(prevState => !prevState);
    }

    const buttonClickHandler = (section_text) => {
        props.scrollHandler(section_text);
    }

    return (
        <Fragment>
            <header>
                <div className='main-logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <nav className='nav-links'>
                    <div>
                        <button onClick={() => { buttonClickHandler('roadmap') }}>Roadmap</button>
                    </div>
                    <div>
                        <button onClick={() => { buttonClickHandler('resources') }}>Resources</button>
                    </div>
                    <div>
                        <button onClick={() => { buttonClickHandler('team') }}>Team</button>
                    </div>
                    <div className='social-media-links'>
                        <div>
                            <a href='https://discord.gg/8UqJXTX7Kd' target='_blank' rel='noreferrer'>
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
                </nav>
                <nav className='mobile-navigation' onClick={showMenuHandler}>
                    <img src={hamburger} alt='Hamburger Menu' />
                </nav>
            </header>
            {showMenu && <div className='mobile-navigation-expanded'
            >
                <a href='https://www.instagram.com/scrappysquirrels/' target='_blank' rel='noreferrer'>Instagram</a>
                <a href='https://discord.gg/8UqJXTX7Kd' target='_blank' rel='noreferrer'>Discord</a>
                <a href='https://twitter.com/ScrappyNfts' target='_blank' rel='noreferrer'>Twitter</a>
            </div>}
        </Fragment >
    )
}

export default Header;