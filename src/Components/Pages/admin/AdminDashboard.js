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

const AdminDashboard=()=> {




  return (
      <div id="content" className="h-screen">
          <nav id="nav1" className="h-full">
              <a href="#page3">
                  <div className="text-center">
                      <img className="mx-auto my-2 rounded-circle" src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809" alt="" />
                      <p>Admin name</p>
                      <p> Role</p>
                      <p>last-login</p>
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