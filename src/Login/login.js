import "./login.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import App from '../App';

//document.getElementById('sign_in_btn').addEventListener('click', login, false);

function login() {

    
    var userEmail = document.getElementById("emailS").value;
    var userPass =document.getElementById("passwordS").value;

    //alert(userEmail)
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        
        ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById('root')
          );
          //alert("Logged In as "+user.email)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });

    

}

function Login() {
  return(
<>

<div id="container" className="container-fluid text-center">
  <div className="row con-center">
    <div className="col-sm-10 offset-sm-1 con-center">

    <div action="./" className="sign-in-form con-center">
  <img src="http://iiitvadodara.ac.in/img/Logo.jpg" style={{height: '120px', width: '110px',margin:'80px'}} alt="" />
  <h2 className="title">IIIT Vadodara Sign in</h2>
  <div className="input-field">
    <i className="fas fa-user" />
    <input type="email" placeholder="Username" id="emailS" />
  </div>
  <div className="input-field">
    <i className="fas fa-lock" />
    <input type="password" placeholder="Password" id="passwordS" />
  </div>
  <input defaultValue="Login" className="btn solid" id="sign_in_btn" onClick={login} />
  <div id="password_reset">
    Forgot password ,Click to reset
  </div>
</div>

</div>
</div>
</div>

</>

  );
  
}

export default Login;
