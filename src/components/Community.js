import './Community.css';
import community from '../images/community.png';
import discord_cta from '../images/Discord_CTA.png';

var emoji = require('node-emoji')

function Community() {
    return (
        <section className='community'>
            <div className='community-container'>
                <div className='comm-image'>
                    <img src={community} alt="Placeholder" />
                </div>
                <div className='comm-content'>
                    <h2>The community</h2>
                    <div>
                        Find
                        <ul>
                            <li>
                            {emoji.get("people_holding_hands")} Interesting people in Web3 
                            </li>
                            <li>
                            {emoji.get("office")} Job opportunities
                            </li>
                            <li>
                            {emoji.get("books")} Exclusive educational content
                            </li>                          
                        </ul>

                        ... and a discord server you can call home!
                    </div>
                    <br />
                    <div>
                        <a href="https://discord.gg/8UqJXTX7Kd" target="_blank">
                            <img src={discord_cta} width={300} alt="Join Discord"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;