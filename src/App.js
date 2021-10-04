// import "./App.css"
import React from 'react';
import {ToastContainer} from "react-toastify";
import {AppProvider} from "./Context/AppContext";
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
import AdmissionDocumentUpload from "./Components/Pages/admission/AdmissionDocumentUpload";
import AdmissionFees from "./Components/Pages/admission/AdmissionFees";
import AdminDashboard from "./Components/Pages/admin/AdminDashboard";
import GetStudent from "./Components/Pages/admin/GetStudent";
import VerifyDoc from "./Components/Pages/admin/VerifyDoc";




function App() {
  return(
     <AppProvider>
    <Router>
    <NavbarCustom />
      <Route path ="/Admin" exact component={AdminDashboard}/>
      <Route path ="/AdmissionForm" exact component={AdmissionForms}/>
      <Route path ="/AdmissionFees" exact component={AdmissionFees}/>
      <Route path ="/AdmissionDocumentUpload" exact component={AdmissionDocumentUpload}/>
      <Route path="/SignUp" exact component={SignUp}/>
      <Route  path='/Admin/VerifyDoc/:id' exact component={VerifyDoc} />
      <Route  path='/Admin/:id' exact component={GetStudent} />


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
     </AppProvider>

  );
  
}

export default App;
