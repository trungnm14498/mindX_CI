import './light_style.css'
import { useState } from 'react';

function Color({color, status1, status2, status3, status}) {
        return (
            <div className={`${color} light`} id={color}></div>
        )
}

function Light() {
    const colorList = ['red', 'yellow', 'green'];
    const [status1, setStatus1] = useState(true);
    const [status2, setStatus2] = useState(false);
    const [status3, setStatus3] = useState(false);
    const [status] = useState(true);
    const renderLight = colorList.map(e => {
        return (
            <Color color={e} status1={status1} status2={status2} status3={status3} status={status}></Color>
        )
    })

    const lights = document.querySelectorAll('.light');

    const setColor = () => {
        // status1 = true; status2 = false; status3 = false;
        lights[0].className = 'red light';
        lights[1].className = 'yellow light off';
        lights[2].className = 'green light off';
        setStatus1(true);
        setStatus2(false);
        setStatus3(false);
        console.log(status1, status2, status3);
    }

    const changeColor = () => {
        if (status1 === true && status2 === false && status3 === false) {
            lights[0].classList.remove('off');
            lights[1].classList.add('off');
            lights[2].classList.add('off');
            setStatus1(!status1);
            setStatus2(!status2);
        }
        if (status1 === false && status2 === true && status3 === false) {
            setStatus2(!status2);
            setStatus3(!status3);
            lights[0].classList.add('off');
            lights[1].classList.remove('off');
            lights[2].classList.add('off');
        }
        if (status1 === false && status2 === false && status3 === true) {
            lights[0].classList.add('off');
            lights[1].classList.add('off');
            lights[2].classList.remove('off');
            setStatus1(!status1);
            setStatus3(!status3);
        }
        console.log(status1, status2, status3);
    }

    return (
        <div className="light_container">
            <div className="buttons">
                <button className='start' onClick={setColor}>Start</button>
                <button className='next' onClick={changeColor}>Next</button>
            </div>
            
            <div className='light_content'>
                {renderLight}
            </div>
        </div>
    )
}

export default Light;