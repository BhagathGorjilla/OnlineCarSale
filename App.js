import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import DashBoard from './components/DashBoard';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddCustomer from './components/AddCustomer';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
        <div className="container">
          <Switch>

            <Route path="/"  exact={true}></Route>
            <Route path="/customers" component={DashBoard} ></Route>
            <Route path="/addcustomer" component={AddCustomer} />
            <Route path="/updatecustomer/:userId" component={UpdateCustomerComponent} />    
            <Route path="/getCustomer/:userId" component={ViewCustomerComponent} />     
            
          </Switch>
        </div>
        <FooterComponent /> 
      </Router>
    </div>
  );
}

export default App