import React from "react";
import {useHistory} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import firebase from "firebase/compat";



const StudentRegister = () => {
    const history = useHistory()
    const firestoreDb = firebase.firestore()

    const registerUser = () => {

        var userEmail = document.getElementById("emailS").value;
        var userPass = document.getElementById("passwordS").value;
        var userConfPass = document.getElementById("passwordC").value;
        const auth = getAuth();
        const firestoreDb = firebase.firestore()


        if (userEmail != null && userPass != null && userConfPass != null && userPass === userConfPass) {

            createUserWithEmailAndPassword(auth, userEmail, userPass).then((userCredential) => {
                alert("Now you have been registered on student portal.Login to visit student portal.")
                loginUser();

            })

        }

    }

    function checkStudentStatus(){

        const userEmail = document.getElementById("emailS").value;

        firestoreDb.collection('Students2021').where("Email","==",userEmail).get().then((snapshot) => {
            if (!(snapshot.empty)) {

                registerUser();
            } else {
                alert("Invalid email Id ! Please Register with email id provided by institute.")
                console.log("No data available");
                history.push("/StudentRegister")
            }
        }).catch((error) => {
            console.error(error);
            alert(error)
        });

    }


    function loginUser() {
        history.push("/StudentLogin")
    }

    return (
        <div id="container" className="container text-center">
            <div className="row ">
                <div className="col-sm-10 offset-sm-1 text-center">

                    <div action="./" className="sign-in-form align-center">
                        <img className="mx-auto"
                             src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809"
                             style={{height: '120px', width: '110px', margin: '60px'}} alt=""/>
                        <h2 className="title">IIIT Vadodara Student Portal Registration</h2>
                        <p className="text-info">Register only with the credential emailed to you by the institute after admission.</p>
                        <br/><br/>
                        <div className="input-field">
                            <i className="fas fa-user"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333',
                                padding:"12px",
                            }} type="email" placeholder=" User Email" id="emailS"/>
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333',
                                padding:"12px",
                            }} type="password" placeholder="Password" id="passwordS"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333',
                                padding:"12px",
                            }} type="password" placeholder="Confirm Password" id="passwordC"/>
                        </div>
                        <div className="container text-center d-flex-vertical">
                            <button className="btn-submit solid text-center" id="sign_up_btn"
                                    onClick={checkStudentStatus}>Register</button>
                            <br/>
                            <button className="btn btn-outline-primary w-50 solid text-center" id="sign_in_btn"
                                    onClick={loginUser}>Already have account ,SignIn</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )


}


export default StudentRegister;