import './Community.css';
import placeholder from '../images/placeholder.png';

function Community() {
    return (
        <section className='community'>
            <div className='community-container'>
                <div className='comm-image'>
                    <img src={placeholder} alt="Placeholder" />
                </div>
                <div className='comm-content'>
                    <h2>Join the Community!</h2>
                    <p>As part of the Scrappy Squirrel community, you will get access to a set of libraries, tutorials, and articles created (and curated) by the team that will improve your understanding of the space (regardless of if you are a buyer, a creator, or a developer).</p>
                    <p>
                        Members are also encouraged to share their discoveries with the community. We aspire to become a one-stop-shop for anyone looking to get into NFTs.
                    </p>
                    <p>
                        Finally, creators and builders and encouraged to collaborate, and work on exciting new projects. We can't wait to see what amazing things you build!
                    </p>
                    <p>
                        <b>You do not need to buy a squirrel to be a part of the community. Everyone is welcome!</b>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Community;