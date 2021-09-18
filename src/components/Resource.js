import './Resource.css';

function Resource(props) {
    return (
        <a href={props.link} target='_blank' rel='noreferrer'>
            <div className='resource'>
                <div>
                    <img src={props.img_src} alt={props.heading} />
                </div>
                <div className='res-content'>
                    <h3>{props.heading}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </a>
    )
}

export default Resource;