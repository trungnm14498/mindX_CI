import './TrafficLight.css';
import Light from '../Light/Light';
import React from 'react';
import {useState} from 'react';

export default function TrafficLight() {
    const color = {
        Red: "red",
        Yellow: "yellow",
        Green: "green"
    }
    const [lightOn, setLightOn] = useState(color.Red);
    const turnOnLight = () => {
        if (lightOn === color.Green) {
            setLightOn(color.Yellow);
            return;
        }

        if (lightOn === color.Yellow) {
            setLightOn(color.Red);
            return;
        }

        if (lightOn === color.Red) {
            setLightOn(color.Green);
            return;
        }
    }
    return (
        <div className='container'>
            <div className="traffic-light">
                <Light color={color.Red} isOn={lightOn === color.Red}/>
                <Light color={color.Yellow} isOn={lightOn === color.Yellow}/>
                <Light color={color.Green} isOn={lightOn === color.Green}/>
            </div>
            <button onClick={turnOnLight}>Next</button>
        </div>
    )
}