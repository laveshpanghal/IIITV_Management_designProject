import "./login.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import App from '../App';
import {useHistory} from "react-router-dom";
import SignUp from "../Components/SignUP/SignUp";
import Admission from "../Components/Pages/Admission";
import NavbarCustom from "../Components/Navbar/NavbarCustom";
//document.getElementById('sign_in_btn').addEventListener('click', login, false);


const Login = () => {
    const history = useHistory()
    function login() {


        var userEmail = document.getElementById("emailS").value;
        var userPass =document.getElementById("passwordS").value;

        //alert(userEmail)


        const auth = getAuth();
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                // Signed in

                const user = userCredential.user;



                    history.push('/Admission');

                // ReactDOM.render(
                //     <React.StrictMode>
                //         <NavbarCustom/>
                //       <Admission/>
                //     </React.StrictMode>,
                //     document.getElementById('root')
                //   );
                //alert("Logged In as "+user.email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });

    }
    function HandleSignUP() {

       history.push("/SignUp")


    }

    // let history = useHistory()
    //
    // const HandleSignUP = (history)=> {
    //
    //     history.push("/")
    //
    // }

  return(
<>

<div id="container" className="container text-center">
  <div className="row ">
    <div className="col-sm-10 offset-sm-1 text-center">

        <div action="./" className="sign-in-form align-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809" style={{height: '120px', width: '110px',margin:'80px'}} alt="" />
          <h2 className="title">IIIT Vadodara Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <input type="email" placeholder="Username" id="emailS" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input style={{
                background:'none',
                outline: 'none',
                border: 'none',
                lineHeight:'1',
                fontWeight: '600',
                fontSize: '1.1rem',
                color: '#333'
            }}   type="password" placeholder="Password" id="passwordS" />
          </div>
          <button  className="btn-submit solid text-center" id="sign_in_btn" onClick={login} >Login</button>
          <div id="password_reset">
            Forgot password ,Click to reset
          </div>

            <button className= "btn btn-outline-primary w-50 solid text-center" onClick={HandleSignUP}>Do no have account ,Register</button>

      </div>
  </div>
</div>
</div>

</>

  );
  
}

export default Login;
