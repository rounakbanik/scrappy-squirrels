const medium = (
    <div>
        <p>
            We launch a series of articles that shows you how to create an NFT project from scratch. Topics included generative art, IPFS, ERC-721 contracts, web3 frontends, allowlists, and more. We also open-source our generative art library.
        </p>
        <p>
            <a href='https://medium.com/scrappy-squirrels' target='_blank' rel='noreferrer'>Visit the Medium Publication.</a>
        </p>
    </div>
);

const spotlight = (
    <div>
        <p>
            We launch <i>Project Spotlight</i> where we feature some of the best projects created by our community members. We will also advice spotlight members and make intros with influential people in our extremely strong network.
        </p>
        <p>
            We will also invite exceptional builders and artists into our community by giving out Scrappy NFTs for free.
        </p>
    </div>
)

const daos = (
    <div>
        <p>
            We launch a members-only series of articles on how to build DAOs from scratch. We also cover topics such as governance models, building DAO tooling, contributing to DAOs, etc.
        </p>
    </div>
)

const treasure_hunt = (
    <div>
        <p>
            We create a series of articles on cryptography and how to crack codes. We will then publish an encrypted text, and series of clues to help retrieve the original message. Winners get Scrappy NFTs and prizes worth 5 ETH.
        </p>
    </div>
)

const youtube = (
    <div>
        <p>
            We launch the Scrappy Squirrels YouTube channel and as a first order of business, convert all our content into video.
        </p>
        <p>
            We also launch a weekly Twitter Space where we talk everything web3 and blockchain with some of the smartest people in the space.
        </p>
    </div>
)

const hackathon = (
    <div>
        <p>
            We conduct the Scrappy Hackathon. All holders will be invited to collaborate and work on projects of their choosing.
        </p>
        <p>
            The project we like best will be awarded <b>3 ETH</b> and the next two runners-up will be awarded <b>1 ETH</b> each. We will aid all 3 teams with marketing, tech, and launch.
        </p>
    </div>
)

const jobs = (
    <div>
        <p>
            We launch an app where Scrappy members can create their professional profiles. We also create a job/gigs board and a referral system.
        </p>
    </div>
)

const infra = (
    <div>
        <p>
            We launch a series of articles on how to go about building web3 infrastructure projects.
        </p>
    </div>
)

const BENEFITS = [
    {
        percentage: '0',
        heading: 'A Guide to Building NFT Projects',
        text: medium,
    },
    {
        percentage: '25',
        heading: 'Project Spotlight',
        text: spotlight,
    },
    {
        percentage: '50',
        heading: 'A Guide to Building DAOs',
        text: daos
    },
    {
        percentage: '60',
        heading: 'Treasure Hunt',
        text: treasure_hunt,
    },
    {
        percentage: '75',
        heading: 'WeWork Hackday',
        text: hackathon,
    },
    {
        percentage: '85',
        heading: 'A Guide to building Infra Projects',
        text: infra,
    },
    {
        percentage: '90',
        heading: 'YouTube and Twitter Spaces',
        text: youtube,
    },
    {
        percentage: '100',
        heading: 'Professional Network & Job Board',
        text: jobs,
    },

]

export default BENEFITS;