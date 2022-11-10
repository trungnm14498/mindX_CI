import './counter_style.css'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count+1);
    }

    const resetCount = () => {
        setCount(0);
    }
    return (
        <div className="counter">
            <div className="counter-buttons">
                <button onClick={resetCount}>Reset Count ...</button>
                <button onClick={increaseCount}>Increase Count!</button>
            </div>
            <span>Your Count: {count}</span>
        </div>
    )
}

export default Counter;
