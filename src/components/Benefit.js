import './Benefit.css';

function Benefit(props) {
    return (
        <div className='ben'>
            <div>
                <img src={props.img_src} alt="Handshake" />
            </div>
            <div>
                <h3>{props.heading}</h3>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Benefit;