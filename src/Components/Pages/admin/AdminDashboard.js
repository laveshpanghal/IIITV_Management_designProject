import React, {useState} from "react";
import "../Styles/Admindash.css"
import {child, get} from "firebase/database";
import realDb from "../../../index";
import ReactDOM from "react-dom";
import App from "../../../App";
import Admission from "../Admission";
import AdmissionReq from "./AdmissionReq";

const AdminDashboard=()=> {




  return (
      <div id="content">
          <nav id="nav1">
              <a href="#page1">
                  <div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809" alt="" />
                      <p>Admin name</p>
                      <p> Role</p>
                      <p>last-login</p>
                  </div>
              </a><hr />
              <a href="#page2">Role Request</a><hr />
              <a href="#page3">Student Admission Request</a><hr />
              <a href="#page4">Course Faculty Request</a><hr />
          </nav>
          <main>
              <div id="page2" className="page">
                  <h1>Role Request</h1>
                  <p>Role Request content</p>


              </div>
              <div id="page3" className="page">
                  <h1>Student Admission Request</h1>

                  <React.StrictMode>
                      <AdmissionReq />
                  </React.StrictMode>

              </div>
              <div id="page4" className="page">
                  <h1>Course Faculty Request</h1>
                  <p>Course Faculty Request page</p>
              </div>
              <div id="page1" className="page default">
                  <h1>Admin page</h1>
                  <p>Admin Page</p>
              </div>
          </main>
      </div>
  );

}

  export default AdminDashboard;