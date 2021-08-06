import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customers";

class CustomerService {

    getCustomers(){
        console.log("service invoked");
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomers(customer){
        console.log("service invoked");
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customerId,customer){
        alert("your update customerService")
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        alert("deleted")
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
    }
}

export default new CustomerService()