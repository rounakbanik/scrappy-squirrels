import './Header.css';
import twitter_white from '../images/twitter.png';
import discord_white from '../images/discord.png';
import instagram_white from '../images/instagram.png';
import hamburger from '../images/hamburger.jpeg';
import logo from '../images/logo.png';
import { Fragment, useState } from 'react';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(prevState => !prevState);
    }

    return (
        <Fragment>
            <header>
                <div className='main-logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <nav className='nav-links'>
                    <div>
                        <a href='#membership'>Membership</a>
                    </div>
                    <div>
                        <a href='#resources'>Resources</a>
                    </div>
                    <div>
                        <a href='#team'>Team</a>
                    </div>
                    <div className='social-media-links'>
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
                </nav>
                <nav className='mobile-navigation' onClick={showMenuHandler}>
                    <img src={hamburger} alt='Hamburger Menu' />
                </nav>
            </header>
            {showMenu && <div className='mobile-navigation-expanded'
            >
                <a href='#membership'>Membership</a>
                <a href='#resources'>Resources</a>
                <a href='#team'>Team</a>
                <a href='https://instagram.com'>Instagram</a>
                <a href='https://discord.com'>Discord</a>
                <a href='https://twitter.com'>Twitter</a>
            </div>}
        </Fragment >
    )
}

export default Header;