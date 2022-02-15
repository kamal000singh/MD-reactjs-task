import React, { useReducer } from 'react'

let initState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
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
            <div className="container mt-5 fs-1 fw-bold text-center">INCREMENT/DECREMENT USING useReducer Hook</div><hr />
            <div className="fw-bold text-center"><span style={{ fontSize: '10rem' }}
                className={` text-${count === 0 ? 'muted' : 'normal'} `}>{count}</span></div>
            <div className="text-center fs-1 fw-bold"><button disabled={count === 0} onClick={handleDecrement}
                className="btn btn-danger me-3">Decrement</button><button onClick={handleIncrement}
                    className="btn btn-success ms-2">Increment</button></div>

        </>
    )
}

export default CountNumber