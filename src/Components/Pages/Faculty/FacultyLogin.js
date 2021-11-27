import "../../../Login/login.css"
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useHistory} from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import firebase from "firebase/compat";


const FacultyLogin = () => {
    const RealDb = ref(getDatabase())
    const history = useHistory()
    const firestoreDb = firebase.firestore()
    function login() {


        var userEmail = document.getElementById("emailS").value;
        var userPass =document.getElementById("passwordS").value;

        //alert(userEmail)


        const auth = getAuth();
        signInWithEmailAndPassword(auth, userEmail, userPass)
            .then((userCredential) => {
                // Signed in

                const user = userCredential.user;

                checkAdminStatus(user.email);

                //history.push('/Admin');

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

        history.push("/FacultySignUp")


    }

    function checkAdminStatus(email){
        firestoreDb.collection('Faculty').where("Email","==",email).get().then((snapshot) => {
            if (!(snapshot.empty)) {

                console.log(snapshot)
                console.log(!(snapshot.empty))
                    history.push("/facultyRedirect")
            } else {
                alert("You are not faculty")
                console.log("No data available");
                history.push("/")
            }
        }).catch((error) => {
            console.error(error);
            alert(error)
        });

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
                            <img className="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809" style={{height: '120px', width: '110px',margin:'80px'}} alt="" />
                            <h2 className="title">IIIT Vadodara Faculty Login</h2>
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
                                    color: '#333',
                                    padding:"6px",
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

export default FacultyLogin;
