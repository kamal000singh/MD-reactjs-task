import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/action-creators/index"

const Home = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return <div className="container text-center my-5">
        <h2>Debit/withdraw Amount</h2>
        <button onClick={() => { withdrawMoney(100) }} className="btn btn-primary mx-2">-</button>
        update balance : {balance}
        <button onClick={() => { depositMoney(100) }} className="btn btn-primary mx-2">+</button>
        <div className="text-center fw-bold my-5"><h1>Use Redux Reducer</h1>In this component, you can deposit and receive money from your account using redux reducer.</div>
    </div>
}

export default Home