import './light_style.css'
import { useState } from 'react';

function Color({color, status}) {
        return (
            <div className={`light ${color}`}></div>
        )
}

function Light() {
    const [status, setStatus] = useState(0);
    const [color1, setColor1] = useState('off');
    const [color2, setColor2] = useState('off');
    const [color3, setColor3] = useState('off');

    
    const startColor = () => {
        setColor1('red');
        setColor2('off');
        setColor3('off');
        setStatus(1);
        console.log(status);
    }
    
    const changeColor = () => {
        if (status === 1) {
            setColor2('yellow');
            setColor1('off');
            setColor3('off');
            setStatus(2);
            console.log(status);
        }
        if (status === 2) {
            setColor3('green');
            setColor1('off');
            setColor2('off');
            setStatus(3);
            console.log(status);

        }
        if (status === 3) {
            startColor()
        }
    }

    return (
        <div className="light_container">
            <div className="buttons">
                <button className='start' onClick={startColor}>Start</button>
                <button className='next' onClick={changeColor}>Next</button>
            </div>
            
            <div className='light_content'>
                <Color color={color1} status={status}/>
                <Color color={color2} status={status}/>
                <Color color={color3} status={status}/>
            </div>
        </div>
    )
}

export default Light;