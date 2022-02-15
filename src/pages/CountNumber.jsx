import React, { useReducer } from 'react'

let initState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state = state + 1;
            return state;
        case 'DECREMENT':
            return state - 1;
        default: return state;
    }
}

const CountNumber = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <>
            <div className="fw-bold text-center"><span style={{ fontSize: '10rem' }}
                className={` text-${count === 0 ? 'muted' : 'normal'} `}>{count}</span></div>
            <div className="text-center fs-1 fw-bold"><button disabled={count === 0} onClick={handleDecrement}
                className="btn btn-danger me-3">Decrement</button><button onClick={handleIncrement}
                    className="btn btn-success ms-2">Increment</button></div>
            <div className="container mt-5 fs-1 fw-bold text-center">DECREMENT/INCREMENT</div>
            <p className="container mt-1 fw-bold text-center">In this component we change initial state of the Element using useReducer Hook.<br />
                When state is 0 then decrement button is disabled.</p>

        </>
    )
}

export default CountNumber