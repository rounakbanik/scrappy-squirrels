import './Community.css';
import community from '../images/community.png';
import discord_cta from '../images/Discord_CTA.png';

function Community() {
    return (
        <section className='community'>
            <div className='community-container'>
                <div className='comm-image'>
                    <img src={community} alt="Placeholder" />
                </div>
                <div className='comm-content'>
                    <h2>Join the Community!</h2>
                    <p>
                        As a member of Scrappy Squirrels, you will:
                        <ul>
                            <li>
                                Network with some of the most interesting and influential people in web3.
                            </li>
                            <li>
                                Get access to exclusive content (both technical and non-technical)
                            </li>
                            <li>
                                Post and apply for jobs/gigs
                            </li>
                            <li>
                                Unlock roadmap perks such as raffles, hackathons, conferences, and more!
                            </li>
                            <li>
                                Get early access to projects by DisruptX Labs
                            </li>
                        </ul>
                    </p>
                    <br />
                    <div>
                        <a href="https://discord.gg/8UqJXTX7Kd" target="_blank" rel="noreferrer">
                            <img src={discord_cta} width={200} alt="Join Discord" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;