import { useState } from 'react'
import './Counter.css'

const Counter = () => {

    // const [stateValue, updaterFunction] = useState(intialState)

    const [counter, setCounter] = useState(0)

    const handleCounterInc = () => {
        setCounter(counter + 1)
    }

    const handleCounterDec = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="Counter">

            <h1>Has clickado {counter} veces</h1>

            <button onClick={handleCounterDec}>Reducir</button>
            <button onClick={handleCounterInc}>Aumentar</button>

        </div>
    )
}

export default Counter