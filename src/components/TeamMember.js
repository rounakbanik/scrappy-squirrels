import './TeamMember.css';

function TeamMember(props) {
    return (
        <div className='team-member'>
            <a href={props.twitter}>
                <div>
                    <img src={props.avatar} alt="Squirrel Avatar" />
                </div>
                <h3>{props.name}</h3>
                <div className='description'>
                    {props.description}
                </div>
            </a>
        </div>
    )
}

export default TeamMember;