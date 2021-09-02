import React, {useState} from "react";

const AdminDashboard=()=> {

  return (

      <div id="content">
        <nav id="nav1">
          <a href="#page1">
            <div>
              <img src="../Styles/user.png" alt=""/>
              <p>Admin name</p>
              <p> Role</p>
              <p>last-login</p>
            </div>
          </a>
          <hr/>
          <a href="#page2">Role Request</a>
          <hr/>
          <a href="#page3">Student Admission Request</a>
          <hr/>
          <a href="#page4">Course Faculty Request</a>
          <hr/>
        </nav>
        <main>
          <div id="page2" className="page">
            <h1>Role Request</h1>
            <p>Role Request content</p>
          </div>
          <div id="page3" className="page">
            <h1>Student Admission Request</h1>
            <p>Student Admission Request page </p>
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