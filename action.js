import axios from '../axios/axios';

const _getCustomers = (customers) => ({
    type: 'GET_CUSTOMERs',
    customers
});

export const getCustomers = () => {
    return (dispatch) => {
        return axios.get('customers').then(result => {
            const customers = [];

            result.data.forEach(item => {
                customers.push(item);
            });

            dispatch( _getCustomers(customers));
        });
    };
};


const _addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER',
    customer
});


export const addCustomer = (customerData = {
    userId: '',
    name: '',
    email:'',
    contactNo:'',
    dob:'',
    aid:'',
    area:'',
    doorNo:'',
    street:'',
    city:'',
    state:'',
    pincode:''
  
}) => {
    return (dispatch) => {
        console.log("in add customer action customerdata : "+customerData.userId)
        const customer = {
            userId: customerData.userId,
            name: customerData.name,
            email:customerData.email,
            contactNo:customerData.contactNo,
            dob:customerData.dob,
            aid: customerData.aid,
            area: customerData.area,
            doorNo: customerData.doorNo,
            street: customerData.street,
            city: customerData.city,
            state: customerData.state,
            pincode: customerData.pincode
        };
        console.log("customer dispatch"+customer.userId)
        return axios.post('customers', customer).then(result => {
            dispatch(_addCustomer(result.data));
        });
    };
};



const _editCustomer = (id, updates) => ({
    type: 'EDIT_CUSTOMER',
    id,
    updates
});

export const editCustomer = (id, updates) => {
    return (dispatch) => {
        return axios.put(`customers/${id}`, updates).then(() => {
            dispatch(_editCustomer(id, updates));
        });
    }
};


const _removeCustomer = ({ userId } = {}) => ({
    type: 'REMOVE_CUSTOMER',
    userId
});

export const removeCustomer = (userId) => {
    console.log("id"+userId);
    return (dispatch) => {
        return axios.delete(`customers/${userId}`).then(() => {
            dispatch(_removeCustomer({ userId }));
            dispatch(getCustomers());
        })
    }
};
