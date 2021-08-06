import React from 'react';
import AddCustomerComponent from './AddCustomerComponent';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/action';

const AddCustomer = (props) => (
        <div>
       
        <AddCustomerComponent customer={props.customer}
            handleCancel={()=>{props.history.push('/');}}
            onSubmitCustomer={(customer) => {
                console.log("CUSTOMER ID :"+customer.userId);
                props.dispatch(addCustomer(customer));
                props.history.push('/');
                alert("Customer Added")
            }}
        />
    </div>
);


const mapStateToProps = (state,props) => {
    return {
        customer:state
    };
};

export default connect(mapStateToProps)(AddCustomer);

