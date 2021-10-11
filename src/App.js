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

import GetDoc from "./Components/Pages/admin/GetDoc";
import Alldocs from "./Components/Pages/admin/Alldocs";
import FeesVerify from "./Components/Pages/admin/FeesVerify";
import AdminSignup from "./Components/Pages/admin/AdminSignup";
import AdminLogin from "./Components/Pages/admin/AdminLogin";
import FinalAdmissionStatus from "./Components/Pages/admin/FinalAdmissionStatus";
import EnrollStatus from "./Components/Pages/admin/EnrollStatus";




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

      <Route path='/Admin/VerifyDoc/:id' exact component={VerifyDoc} />
      <Route path='/Admin/VerifyDoc/:id/docs/verify' exact component={Alldocs} />
      <Route path='/Admin/VerifyDoc/:id/:docName' exact component={GetDoc} />
      <Route path='/Admin/VerifyFees/:id' exact component={FeesVerify} />
      <Route path='/Admin/FinalVerification/:id' exact component={FinalAdmissionStatus} />
      <Route path='/Admin/EnrollStatus/:id' exact component={EnrollStatus} />
      <Route path='/Admin/:id' exact component={GetStudent} />
      <Route path="/AdminSignup" exact component={AdminSignup}/>



    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Admission' component={Admission} />
      <Route path='/Students' component={Students} />
      <Route path='/Faculty' component={Faculty} />
      <Route path='/Fees' component={Fees} />
      <Route path='/AdminLogin' component={AdminLogin} />
      <Route path='/Login'  component={Login} />
    </Switch>
  </Router>
     </AppProvider>

  );
  
}

export default App;
