import React, { useReducer } from 'react'

let initBalance = 100000;

const reducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCT1': return state -= action.price;
        case 'PRODUCT2': return state -= action.price;
        case 'PRODUCT3': return state -= action.price;
        case 'PRODUCT4': return state -= action.price;
        default: return state;
    }
}
const ShopPayment = () => {
    const [balance, dispatch] = useReducer(reducer, initBalance);
    const handleProduct1 = (price) => { dispatch({ type: 'PRODUCT1', price: price }) }
    const handleProduct2 = (price) => { dispatch({ type: 'PRODUCT2', price: price }) }
    const handleProduct3 = (price) => { dispatch({ type: 'PRODUCT3', price: price }) }
    const handleProduct4 = (price) => { dispatch({ type: 'PRODUCT4', price: price }) }
    return (
        <><div className="container">
            <div className="text-end mt-3 fs-5">Total Balance: {balance}</div>
            <div className="row mt-4 justify-content-between">
                <div className="col-3 m-2 p-4">PRODUCT 1<br />price: 500 Rs<br />
                    <button onClick={() => { handleProduct1(500) }} className="btn btn-primary mt-2">Buy this product</button>
                </div>
                <div className="col-3 m-2 p-4">PRODUCT 2<br />price: 200 Rs<br />
                    <button onClick={() => { handleProduct2(200) }} className="btn btn-primary mt-2">Buy this product</button>
                </div>
                <div className="col-3 m-2 p-4">PRODUCT 3<br />price: 400 Rs<br />
                    <button onClick={() => { handleProduct3(400) }} className="btn btn-primary mt-2">Buy this product</button>
                </div>
                <div className="col-3 m-2 p-4">PRODUCT 4<br />price: 1000 Rs<br />
                    <button onClick={() => { handleProduct4(1000) }} className="btn btn-primary mt-2">Buy this product</button>
                </div>
            </div>
            <p className="text-center fw-bold mt-2">In this component we initialize the total amount
                of balance is 100000.<br />And when we click on any product then the price of product will be debited from total balance.</p>
        </div></>
    )
}

export default ShopPayment;