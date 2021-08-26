import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom';
import {signOut, getAuth} from "firebase/auth";
import Login from "./Login/login";



function logout() {
  //alert("Logout Successfully")
  const auth = getAuth();
  signOut(auth).then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }).catch((error) => {
    alert(error)
  });

  

}

function App() {
  return(
      <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://iiitvadodara.ac.in">IIIT Vadodara</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./">Admission</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="./" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Students
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./">Course Curriculam</a></li>
            <li><a class="dropdown-item" href="./">Time Table</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="./">Login</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="./" tabindex="-1" aria-disabled="true">Comming Soon</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" onClick={logout} type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>


      </>

  );
  
}

export default App;
