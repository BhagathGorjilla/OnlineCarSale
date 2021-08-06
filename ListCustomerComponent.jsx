import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { removeCustomer } from '../actions/action';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class ListCustomerComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      flag: false
    }
    this.addCustomer = this.addCustomer.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
  }

  deleteCustomer(userId) {
    alert(userId);
    this.props.dispatch(removeCustomer(userId));
    this.props.history.push('/customers');
  }
  addCustomer() {
    this.props.history.push('/addCustomer');
  }

  getCustomer(userId) {
    alert(userId);
    this.props.history.push(`/getCustomer/${userId}`);
  }
  updateCustomer(userId) {
    alert(userId);
    console.log(userId);
    this.props.history.push(`/updatecustomer/${userId}`);

  }
  componentDidMount() {
    this.setState({ customers: this.props.customers })
  }
  render() {
    return (
      <div  >
        
        <h2 align="center" className="text-center">CUSTOMER LIST</h2>
        <div className="row">
        <StyledTableCell align="left"><Button variant="contained" color="primary" onClick={this.addCustomer} className="btn btn-info"> Add Customer</Button></StyledTableCell>
        </div>

        <TableContainer component={Paper}>
          <Table style={{ height: "100%"}}>
            <TableHead style={{ width: "100%"}}>
              <TableRow>
                <StyledTableCell align="center"> ID </StyledTableCell>
                <StyledTableCell align="center"> Name </StyledTableCell>
                <StyledTableCell align="center"> Email </StyledTableCell>
                <StyledTableCell align="center"> DOB </StyledTableCell>
                <StyledTableCell align="center"> Contact </StyledTableCell>
                <StyledTableCell align="center"> Area</StyledTableCell>
                <StyledTableCell align="center"> Door No</StyledTableCell>
                <StyledTableCell align="center"> Street</StyledTableCell>
                <StyledTableCell align="center"> City</StyledTableCell>
                <StyledTableCell align="center"> State</StyledTableCell>
                <StyledTableCell align="center"> Pincode</StyledTableCell>
                <StyledTableCell align="center">--------</StyledTableCell>
                <StyledTableCell align="center"> ACTIONS </StyledTableCell>
                <StyledTableCell align="center">--------</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {this.props.customers.map((Customer) => (
                <StyledTableRow key={Customer.userId}>
                  <StyledTableCell align="center">{Customer.userId}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.name}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.email}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.dob}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.contactNo}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.area}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.doorNo}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.street}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.city}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.state}</StyledTableCell>
                  <StyledTableCell align="center">{Customer.pincode}</StyledTableCell>
                  
                  <StyledTableCell align="right">   <Button color="primary" variant="contained" onClick={() =>
                    this.updateCustomer(Customer.userId)} className="btn btn-info">Update </Button></StyledTableCell>
                  <StyledTableCell align="right"><Button color="secondary" variant="contained" onClick={() => 
                    this.deleteCustomer(Customer.userId)} className="btn btn-danger">Delete </Button></StyledTableCell>
                  <StyledTableCell align="right"><Button color="dark" variant="contained" onClick={() => 
                    this.getCustomer(Customer.userId)} className="btn btn-dark">VIEW </Button></StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>

    )
  }
}



const mapStateToProps = (state) => {
  return {
    customers: state
  };
}

export default withRouter(connect(mapStateToProps)(ListCustomerComponent));