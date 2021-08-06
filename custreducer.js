
const customersReducerDefaultState = [];

export default (state = customersReducerDefaultState, action) => {
    switch (action.type) {


        case 'GET_CUSTOMERs':
            return action.customers;
        default:
            return state;


                       
        case 'ADD_CUSTOMER':
            return [
                ...state,
                action.customer
            ];
        
     case 'REMOVE_CUSTOMER':
            return state.filter(({ id }) => id !== action.id);
        
    
    case 'EDIT_CUSTOMER':
            return state.map((customer) => {
                alert("hi")
                if (customer.id === action.id) {
                    return {
                        ...customer,
                        ...action.updates
                    };
                } else {
                    return customer;
                }
            });
     }
    };
    