import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const amount = useSelector(state => state.amount)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="/">useReducer Hooks</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link fs-5 ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fs-5 ${location.pathname === "/count-number" ? 'active' : ''}`} aria-current="page" to="/count-number">count-number</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fs-5 ${location.pathname === "/shop-payment" ? 'active' : ''}`} to="/shop-payment">Shop-payment</Link>
                            </li>

                        </ul>
                        {location.pathname === "/" && <button disabled={true} className="btn btn-primary ms-2">Your Balance : {amount}</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar