// import "./App.css"
import React from 'react';
import {ToastContainer} from "react-toastify";
import {AppProvider} from "./Context/AppContext";
import NavbarCustom from './Components/Navbar/NavbarCustom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages';
import Admission from './Components/Pages/Admission';
import Students from './Components/Pages/students/Students';
import Admin from './Components/Pages/Admin';
import Faculty from './Components/Pages/Faculty';
import Fees from './Components/Pages/Fees/Fees';
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
import StudentAdmissionDashboard from "./Components/Pages/admission/StudentAdmissionDashboard";
import StudentAdmissionChanges from "./Components/Pages/admission/StudentAdmissionChanges";
import FacultyDash from "./Components/Pages/Faculty/FacultyDash";
import FacultyLogin from "./Components/Pages/Faculty/FacultyLogin";
import FacultySignUp from "./Components/Pages/Faculty/FacultySignUp";
import CourseSel from "./Components/Pages/students/CourseSel";
import StudentDashBoard from "./Components/Pages/students/StudentDashBoard";
import FacultyRedirect from "./Components/Pages/Faculty/FacultyRedirect";
import FetchstudentSearch from "./Components/Reusable/FetchstudentSearch";
import GradeMasterStudentFetch from "./Components/Pages/Faculty/GradeMasterStudentFetch";
import AddGradeCard from "./Components/Pages/Faculty/AddGradeCard";
import StudentLogin from "./Components/Pages/students/StudentLogin";
import StudentRegister from "./Components/Pages/students/StudentRegister";
import GradeCardVeiwMaster from "./Components/Pages/Faculty/GradeCardVeiwMaster";
import FetchGradeCard from "./Components/Reusable/FetchGradeCard";
import AddAcademicCalender from "./Components/Pages/Faculty/AddAcademicCalender";
import GradeCardViewStudent from "./Components/Pages/students/GradeCardViewStudent";
import StudentDocumentsAdmin from "./Components/Pages/admin/StudentDocumentsAdmin";



function App() {
  return(
     <AppProvider>
    <Router>
    <NavbarCustom />


    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Admission' component={Admission} />
      <Route path='/Students' component={Students} />
      <Route path='/FacultyLogin' component={FacultyLogin} />
      <Route path='/Fees' component={Fees} />
      <Route path='/AdminLogin' component={AdminLogin} />
      <Route path='/Login'  component={Login} />
      <Route path ="/Admin" exact component={AdminDashboard}/>


      <Route path ="/AdmissionForm" exact component={AdmissionForms}/>
      <Route path ="/StudentAdmissionDashboard" exact component={StudentAdmissionDashboard}/>
      <Route exact path ="/StudentAdmissionDashboard/makeChanges" exact component={StudentAdmissionChanges}/>
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
      <Route path='/FacultyDash' exact component={FacultyDash} />
      <Route path='/FacultySignUp' component={FacultySignUp} />
      <Route path='/studentCourses' component={CourseSel} />
      <Route path='/studentDashBoard' component={StudentDashBoard} />
      <Route path='/facultyRedirect' component={FacultyRedirect} />
      <Route path='/GradeMasterStudentSearch' component={GradeMasterStudentFetch} />
      <Route path='/AddGradeCard/:id' exact component={AddGradeCard} />
      <Route path='/GradeMaster/ViewGradeCard/:id' component={GradeCardVeiwMaster} />
      <Route path='/Student/ViewGradeCard/:id' component={GradeCardViewStudent} />
      <Route path='/ViewGradeCard/:id/:docName' exact component={FetchGradeCard} />
      <Route path='/Admin/ViewStudentDocs/:id' exact component={StudentDocumentsAdmin} />

      <Route path='/StudentLogin' component={StudentLogin} />
      <Route path='/StudentRegister' component={StudentRegister} />
      <Route path='/AddAcademicCalender' component={AddAcademicCalender} />



    </Switch>
  </Router>
     </AppProvider>

  );
  
}

export default App;
