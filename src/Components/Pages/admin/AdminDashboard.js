import React, {useState} from "react";
import "../Styles/Admindash.css"
import {child, get} from "firebase/database";
import realDb from "../../../index";
import ReactDOM from "react-dom";
import App from "../../../App";
import Admission from "../Admission";
import AdmissionReq from "./AdmissionReq";
import Faculty from "../Faculty";
import FacultyReq from "./FacultyReq";
import StudentInfoFetch from "./StudentInfoFetch";
import AddAlert from "../../Reusable/AddAlert";
import AddArticle from "../Articles/AddArticle";
import Adminavtar from "../../../profile-user.png"

const AdminDashboard=()=> {




  return (
      <div id="content" className="h-screen">
          <nav id="nav1" className="h-full">
              <a href="#page3">
                  <div className="text-center flex flex-row justify-between">
                      <div className='pl-12'>  <img className="mx-auto my-2 rounded-circle" src={Adminavtar} alt="" /></div>
                      <div className='pr-24 pt-10 text-xl font-bold'><p>Admin </p></div>



                  </div>
              </a><hr />
              <a href="#page3">Student Admission Request</a><hr/>
              <a href="#page4"> Faculty Request</a><hr/>
              <a href="#page2">Fetch Student Information</a><hr/>
              <a href="#page5">Send Students Alert</a><hr/>
              <a href="#page6">Add Article</a><hr/>
          </nav>
          <main>

              <div id="page3" className="page">
                  <h1>Student Admission Request</h1>

                  <React.StrictMode>
                      <AdmissionReq />
                  </React.StrictMode>

              </div>
              <div id="page6" className="page">
                  <h1>Add Article</h1>

                  <React.StrictMode>
                      <AddArticle/>
                  </React.StrictMode>

              </div>
              <div id="page5" className="page">


                  <React.StrictMode>
                     <AddAlert/>
                  </React.StrictMode>

              </div>
              <div id="page2" className="page">

                  <React.StrictMode>
                     <StudentInfoFetch/>
                  </React.StrictMode>

              </div>
              <div id="page4" className="page">
                  <h1>Course Faculty Request</h1>
                  <React.StrictMode>
                      <FacultyReq/>
                  </React.StrictMode>
              </div>
              <div id="page1" className="page default">
                  <h1>Student Admission Request</h1>

                  <React.StrictMode>
                      <AdmissionReq />
                  </React.StrictMode>
              </div>

          </main>
      </div>
  );

}

  export default AdminDashboard;