import React, { Component } from 'react'
import {FloatingLabel} from "react-bootstrap"
import { Card,Col,Form,Row} from "react-bootstrap";
import CustomerService from '../services/CustomerService'

class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            name: '',
            email:'',
            contactNo:'',
            dob:'',
            area:'',
            doorNo:'',
            street:'',
            city:'',
            state:'',
            pincode:'',
            errors:{}
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeAreaHandler = this.changeAreaHandler.bind(this);
        this.changeDoorNoHandler = this.changeDoorNoHandler.bind(this);
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this)
        this.changePincodeHandler = this.changePincodeHandler.bind(this);
    }


    componentDidMount(){

            CustomerService.getCustomerById(this.state.userId).then( (res) =>{
                let customer = res.data;
                this.setState({
                    userId: customer.userId,
                    name: customer.name,
                    email : customer.email,
                    contactNo : customer.contactNo,
                    dob : customer.dob,
                    area: customer.area,
                    doorNo: customer.doorNo,
                    street: customer.street,
                    city: customer.city,
                    state: customer.state,
                    pincode: customer.pincode
                });
            });      
    }
    UpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {userId: this.state.userId, name: this.state.name, email: this.state.email,contactNo: this.state.contactNo, dob: this.state.dob,area:this.state.area,
            doorNo:this.state.doorNo,street:this.state.street,city:this.state.city,state:this.state.state,pincode:this.state.pincode};
        console.log('customer => ' + JSON.stringify(customer));

            CustomerService.updateCustomer(this.state.userId,customer).then( res => {
                this.props.history.push('/customers');
            });
    }
    
    changeUserIdHandler= (event) => {
         this.setState({userId: event.target.value});
     }
 
     changeNameHandler= (event) => {
         this.setState({name: event.target.value});
     }
 
     changeEmailHandler= (event) => {
         this.setState({email: event.target.value});
     }
 
     changeContactNoHandler= (event) => {
           this.setState({contactNo: event.target.value});
     }
   
     changeDOBHandler= (event) => {
           this.setState({dob: event.target.value});
     }

     changeAreaHandler= (event) => {
        this.setState({area: event.target.value});
  }

  changeDoorNoHandler= (event) => {
        this.setState({doorNo: event.target.value});
  }
  changeStreetHandler= (event) => {
        this.setState({street: event.target.value});
  }
  changeCityHandler= (event) => {
        this.setState({city: event.target.value});
  }
  changeStateHandler= (event) => {
        this.setState({state: event.target.value});
  }
  changePincodeHandler= (event) => {
        this.setState({pincode: event.target.value});
  }
 
    cancel(){
        this.props.history.push('/customers');
    }
    
    onSubmit(e) {
        e.preventDefault();
        let customer = {userId: this.state.userId, name: this.state.name, email: this.state.email,contactNo: this.state.contactNo, dob: this.state.dob,area:this.state.area,
            doorNo:this.state.doorNo,street:this.state.street,city:this.state.city,state:this.state.state,pincode:this.state.pincode};
        console.log('customer => ' + JSON.stringify(customer));

        
            this.setState((state) => ({  ...state,error: '' }));
            this.props.onSubmitCustomer(
                
                {
                    userId: this.state.userId,
                    name: this.state.name,
                    email: this.state.email,
                    contactNo: this.state.contactNo,
                    dob : this.state.dob,
                    area:this.state.area,
                    doorNo:this.state.doorNo,
                    street:this.state.street,
                    city:this.state.city,
                    state:this.state.state,
                    pincode:this.state.pincode
                    
                }
                
            );
           
        // }
        
    }


render() {
    return (
        <div>
        <Card
    className="border border-dark m-7"
    style={{ width: "100%"}}
  >
    <Card.Header className="display-6 uppercase ">
      <span className="text-primary" position="center"><b>UPDATION</b></span>
    </Card.Header>
    <Form onSubmit={this.onSubmit} className='add-customer-form'>
      <Card.Body>



        <Row className="mb-6">

        {/* <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.userId && <i className="m-1 text-danger">{this.state.errors.userId}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="user Id *" className="sm-6">
            <Form.Control type="text" id="userId" name="userId" placeholder="Enter userId"
              value={this.state.userId} onChange={this.changeUserIdHandler} required />
            </FloatingLabel>
          </Form.Group> */}

          <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.name && <i className="m-1 text-danger">{this.state.errors.name}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="Name *" className="sm-6">
            <Form.Control type="text" id="Name" name="fName" placeholder="Enter your Name"
              value={this.state.name} onChange={this.changeNameHandler} required />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.email && <i className="m-1 text-danger">{this.state.errors.email}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="Email *" className="sm-6">
            <Form.Control type="text" id="email" name="email" placeholder="Enter your Email"
              value={this.state.email} onChange={this.changeEmailHandler} required />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <br></br>

        <Row className="mb-6">

        <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.contactNo && <i className="m-1 text-danger">{this.state.errors.contactNo}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="Contact Number *" className="sm-6">
            <Form.Control type="text" id="contactNo" name="contactNo" placeholder="Enter contatNo"
              value={this.state.contactNo} onChange={this.changeContactNoHandler} required />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.dob && <i className="m-1 text-danger">{this.state.errors.dob}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="DOB *" className="sm-6">
            <Form.Control type="date" id="dob" name="dob" placeholder="Enter your DOB"
              value={this.state.dob} onChange={this.changeDOBHandler} required />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.area && <i className="m-1 text-danger">{this.state.errors.area}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="area *" className="sm-6">
            <Form.Control type="text" id="area" name="area" placeholder="Enter your Area"
              value={this.state.area} onChange={this.changeAreaHandler} required />
            </FloatingLabel>
          </Form.Group>
        </Row>
<br></br>
        <Row className="mb-6">
        <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.doorNo && <i className="m-1 text-danger">{this.state.errors.doorNo}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="Door No *" className="sm-6">
            <Form.Control type="text" id="doorNo" name="userId" placeholder="Enter Door no"
              value={this.state.doorNo} onChange={this.changeDoorNoHandler} required />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.street && <i className="m-1 text-danger">{this.state.errors.street}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="Street *" className="sm-6">
            <Form.Control type="text" id="street" name="street" placeholder="Enter your street"
              value={this.state.street} onChange={this.changeStreetHandler} required />
            </FloatingLabel>
          </Form.Group>

          
        </Row>

        <br></br>

        <Row className="mb-6">
        <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.city && <i className="m-1 text-danger">{this.state.errors.city}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="City *" className="sm-6">
            <Form.Control type="text" id="city" name="city" placeholder="Enter your City"
              value={this.state.city} onChange={this.changeCityHandler} required />
            </FloatingLabel>
          </Form.Group>
          
        <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.state && <i className="m-1 text-danger">{this.state.errors.state}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="State *" className="sm-4">
            <Form.Control type="text" id="state" name="state" placeholder="Enter state"
              value={this.state.state} onChange={this.changeStateHandler} required />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col}>
          <div style={{ color: 'red' }}>
        {this.state.errors.pincode && <i className="m-1 text-danger">{this.state.errors.pincode}</i>}
        </div>
            <FloatingLabel controlId="floatingInput" label="pincode *" className="sm-4">
            <Form.Control type="text" id="pincode" name="pincode" placeholder="Enter your pincode"
              value={this.state.pincode} onChange={this.changePincodeHandler} required />
            </FloatingLabel>
          </Form.Group>

          
        </Row>


      </Card.Body>

      <Card.Footer className="text-center">
      <button className="btn btn-success" onClick={this.UpdateCustomer}>Update</button>
  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
  <br></br>
          <br></br>
          <h6 style={{color:"green" }}>Note: * are mandatory fields to be filled</h6>
      </Card.Footer>
    </Form>
  </Card>
  </div>
      )
  }
}


export default UpdateCustomerComponent
