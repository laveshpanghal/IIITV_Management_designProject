// import "./App.css"
import React from 'react';
import NavbarCustom from './Components/Navbar/NavbarCustom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages';
import Admission from './Components/Pages/Admission';
import Students from './Components/Pages/Students';
import Admin from './Components/Pages/Admin';
import Faculty from './Components/Pages/Faculty';
import Fees from './Components/Pages/Fees';
import SignUp from "./Components/SignUP/SignUp";
import Login from "./Login/Login";
import AdmissionForms from "./Components/Pages/admission/AdmissionForm";




function App() {
  return(
    <Router>

    <NavbarCustom />
      <Route path ="/AdmissionForm" exact component={AdmissionForms}/>
      <Route path="/SignUp" exact component={SignUp}/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Admission' component={Admission} />
      <Route path='/Students' component={Students} />
      <Route path='/Faculty' component={Faculty} />
      <Route path='/Fees' component={Fees} />
      <Route path='/Admin' component={Admin} />
      <Route path='/Login'  component={Login} />
    </Switch>
  </Router>

  );
  
}

export default App;
