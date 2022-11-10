import './TrafficLight.css';
import Light from '../Light/Light';
import React from 'react';
import { useState, useEffect } from 'react';

export default function TrafficLight() {
    const color = {
        Red: "red",
        Yellow: "yellow",
        Green: "green"
    }

    const [count, setCount] = useState(10);
    const [lightOn, setLightOn] = useState(color.Red);

    useEffect(() => {
        const countdown = setInterval(() => {
            setCount(count - 1);
            document.querySelector('.number').innerText = count;
            if (count === 0) {
                if (lightOn === color.Green) {
                    setCount(3);
                    setLightOn(color.Yellow);
                    return;
                }
                if (lightOn === color.Yellow) {
                    setCount(10);
                    setLightOn(color.Red);
                    return;
                }
                if (lightOn === color.Red) {
                    setCount(10);
                    setLightOn(color.Green);
                    return;
                }
            }

        }, 1000);
        return () => {
            clearInterval(countdown)
        };
    }, [count]);

    return (
        <div className='container'>
            <div className="traffic-light">
                <div className='light-wrapper'>
                    <div className="number">{count}</div>
                </div>
                <Light color={color.Red} isOn={lightOn === color.Red} />
                <Light color={color.Yellow} isOn={lightOn === color.Yellow} />
                <Light color={color.Green} isOn={lightOn === color.Green} />
            </div>
        </div>
    )
}