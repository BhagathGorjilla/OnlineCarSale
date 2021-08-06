import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import customers from "../reducers/custreducer";


export default  () => {
    alert("called");
    return createStore(customers, applyMiddleware(thunk));
};


