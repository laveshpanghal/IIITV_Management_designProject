import React from "react";
import {useHistory} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import firebase from "firebase/compat";



const FacultySignup = () => {
    const history = useHistory()


    const registerUser = () => {
        var userName = document.getElementById("Name").value;
        var userEmail = document.getElementById("emailS").value;
        var userPass = document.getElementById("passwordS").value;
        var userConfPass = document.getElementById("passwordC").value;
        var userRole = document.getElementById("Role").value
        const auth = getAuth();
        const firestoreDb = firebase.firestore()


        if (userName != null && userEmail != null && userPass != null && userConfPass != null && userPass === userConfPass) {

            createUserWithEmailAndPassword(auth, userEmail, userPass).then((userCredential) => {

                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {



                    firestoreDb.collection('Faculty').doc().set({"Name":userName,"Email":userEmail,"Status":"pending","FacultyId":auth.currentUser.uid,"Role":userRole}).then(()=>{ history.push("/facultyRedirect")})


                }).catch((error) => {
                    // An error occurred
                    // ...
                });


            })

        }

    }


    function loginUser() {
        history.push("/FacultyLogin")
    }

    return (
        <div id="container" className="container text-center">
            <div className="row ">
                <div className="col-sm-10 offset-sm-1 text-center">

                    <div action="./" className="sign-in-form align-center">
                        <img className="mx-auto"
                             src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809"
                             style={{height: '120px', width: '110px', margin: '80px'}} alt=""/>
                        <h2 className="title">IIIT Vadodara Faculty Signup</h2>
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
                            }} type="text" placeholder="User Name" id="Name"/>
                        </div>
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
                            <i className="fas fa-user"/>
                            <select className='cursor-pointer' style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333',
                                padding:"12px",
                            }} id="Role">
                                <option className='cursor-pointer'>Course faculty</option>
                                <option>Grade Master</option>
                                <option>Course Master</option>
                                <option>Faculty Master</option>
                            </select>
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
                                    onClick={registerUser}>Register</button>
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


export default FacultySignup;