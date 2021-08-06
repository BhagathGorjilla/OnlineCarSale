import React from 'react';
import {connect} from 'react-redux';

import {getCustomers} from '../actions/action';
import ListCustomerComponent from '../components/ListCustomerComponent'


const DashBoard = (props) =>{
    props.fetchcustomers();
    return(
    <div className='container__list'>
        
        <ListCustomerComponent />
        
    </div>
);}

const mapDispatchToStore = (dispatch) => {
    return {
        fetchcustomers: () => dispatch(getCustomers())
    }
}

export default connect(null,mapDispatchToStore)(DashBoard);
