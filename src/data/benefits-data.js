const medium = (
    <div>
        {/*<p>
            We launch the Scrappy Squirrels Medium Publication. This publication will carry articles on everything blockchain, NFTs, and web3. Articles posted will be both technical and non-technical, and of interest to developers, creators, artists, collectors, and end-users.
</p>*/}
        <p>
            <a href='https://medium.com/scrappy-squirrels' target='_blank' rel='noreferrer'>Visit the Medium Publication.</a>
        </p>
    </div>
);

const youtube = (
    <div>
        <p>
            We launch the Scrappy Squirrels YouTube Channel. We will run educational videos through this channel so as to provide an alternate medium of learning (apart from our publication).
        </p>
        <p>
            We are also exploring the possibility of creating animated shorts involving scrappy squirrels. However, we cannot make a firm commitment to this at the moment. Stay tuned for more details though!
        </p>
    </div>
)

const artgala = (
    <div>
        <p>
            All Scrappy Squirrel NFT holders will be invited to take part in a contest where they will showcase their best artwork. The core team will award the three works we like best with prizes worth <b>3 ETH (approx. $10,500).</b>
        </p>
    </div>
)

const guilds = (
    <div>
        <p>
            Each Scrappy Squirrel will be assigned to a guild based on their held item. Guild members will get an opportunity to script their lore, conduct meetups, and participate in friendly competition with other guilds.
        </p>
    </div>
)

const universe = (
    <div>
        <p>
            Holders will be invited to collaborate and propose projects that extend the Scrappy Squirrels universe. This could be anything really: 3D squirrels, baby squirrels, or an entirely new species that pose a threat to our pals.
        </p>
        <p>
            The project that we like best will be awarded <b>3 ETH</b>, and an opportunity to bring their project under the Scrappy Squirrel umbrella. We will also aid the team with marketing, tech, and launch.
        </p>
    </div>
)

const hackathon = (
    <div>
        <p>
            Once 90% of all squirrels have sold out, we will conduct the Scrappy Hackathon. All holders will be invited to collaborate and work on NFT projects of their choosing.
        </p>
        <p>
            The project we like best will be awarded <b>3 ETH</b> and the next two runners-up will be awarded <b>1 ETH</b> each. We will aid all 3 teams with marketing, tech, and launch.
        </p>
    </div>
)

const talks = (
    <div>
        <p>
            After 95% of the squirrels have sold out, we will conduct a virtual TED-like conference where we will invite esteemed speakers to talk on topics such as blockchain, NFTs, and crypto. The talks will be attended by holders only.
        </p>
    </div>
)

const lotto = (
    <div>
        <p>
            The final event of Roadmap v1.0 will be a lottery. 10 Squirrels will get a chance to win <b>1 ETH</b> each.
        </p>
    </div>
)

const BENEFITS = [
    {
        percentage: '0',
        heading: 'Course #1: A complete guide on Developing your 10k NFT Project',
        text: medium,
    },
    {
        percentage: '25',
        heading: 'Project Spotlight for Community Members'
    },
    {
        percentage: '50',
        heading: 'Course #2: A complete guide on Building a DAO from Scratch (Members Access Only)',
    },
    {
        percentage: '60',
        heading: '100 Squirrels giveaway Raffle',
    },
    {
        percentage: '75',
        heading: 'In-person WeWork Hackday for Token Holders',
    },
    {
        percentage: '85',
        heading: 'Course #3: A complete guide on building your own token (Members Access Only)',
    },
    {
        percentage: '90',
        heading: 'Twitter Spaces with Top Token Holders',
    },
    {
        percentage: '95',
        heading: 'Launch of a jobs channel and job board',
    },
    {
        percentage: '100',
        heading: 'Early access to DisruptX Labs projects only for holders',
    },

]

export default BENEFITS;