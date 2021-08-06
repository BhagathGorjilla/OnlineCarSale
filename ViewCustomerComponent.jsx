import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.userId).then( res => {
            this.setState({customer: res.data});
        })
    }

    cancel(){
       this.props.history.push('/customers');
    }

    render() {
        return (
            <div style={{    display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
            <div>
                <br></br>
                <div>
                    <h3 className = "text-primary"><b>CUSTOMER DETAILS</b></h3>
                    <div className = "card-body"> Hellooo.....<b>{ this.state.customer.name }</b>.<br></br>
                    Your Unique ID is <b>{ this.state.customer.userId }</b> <br></br><br></br>
                        
                        <div className = "row">
                            <label> User Name:  { this.state.customer.name } </label>
                        </div>
                        <div className = "row">
                            <label> Email ID: { this.state.customer.email }</label>
                        </div>
                        <div className = "row">
                            <label> Contact : { this.state.customer.contactNo }</label>
                        </div>
                        <div className = "row">
                            <label> DOB:  { this.state.customer.dob }</label>
                        </div>
                        <div className = "row">
                            <label> AREA:  { this.state.customer.area }</label>
                        </div>
                        <div className = "row">
                            <label> DOOR NO:  { this.state.customer.doorNo }</label>
                        </div>
                        <div className = "row">
                            <label> STREET:  { this.state.customer.street }</label>
                        </div>
                        <div className = "row">
                            <label> CITY:  { this.state.customer.city }</label>
                        </div> 
                        <div className = "row">
                            <label> STATE:  { this.state.customer.state }</label>
                        </div>
                        <div className = "row">
                            <label> PINCODE:  { this.state.customer.pincode }</label>
                        </div>
                        
                    </div>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                </div>
            </div>
            </div>
        )
    }
}

export default ViewCustomerComponent
