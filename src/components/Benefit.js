import './Benefit.css';

function Benefit(props) {
    return (
        <div className='ben'>
            <div className='milestone'>
                <h3>{props.percentage}%</h3>
                {/* <img src={props.img_src} alt="Handshake" /> */}
            </div>
            <div className='goal'>
                <h3>{props.heading}</h3>
                {props.text}
            </div>
        </div>
    )
}

export default Benefit;