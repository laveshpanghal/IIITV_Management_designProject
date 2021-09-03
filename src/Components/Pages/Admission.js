import React, {useState} from 'react';
import "../../Login/login.css"
import { getDatabase, ref, child, get } from "firebase/database";
import {useHistory} from "react-router-dom";
import {useApp} from "../../Context/AppContext";


const Admission = () => {
    const RealDb = ref(getDatabase())
    const history = useHistory()
    const{setRollNo}= useApp();
    const{rollNo}= useApp();


    function verify(e) {

    e.preventDefault()

        var applicantEnrollmentNo = document.getElementById("enrollmentInput").value;
        console.log(applicantEnrollmentNo)
        if (applicantEnrollmentNo === "") {

            alert("Enrollment no should not be blank");

        } else {


            get(child(RealDb, `counsellingEnrollment/2021/${applicantEnrollmentNo}/status`)).then((snapshot) => {
                if (snapshot.exists()) {

                    if(snapshot.val()==="verified")
                    {
                        setRollNo(applicantEnrollmentNo)
                        history.push("/AdmissionForm")

                    }

                } else {
                    alert("Not eligible for admission")
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });


        }
    }


    return (
        <div className="container text-center">

            <div className="card w-md-50 my-5 mx-auto">

                <br/>
                <br/>

                <h3 className="my-20">Enter your JEE Enrollment no. to verify</h3>

                <form className="d-flex-vertical my-10">
                    <div className="form-group ">
                        <br/>
                        <input className="input-field btn btn-secondary-outline"  placeholder="Enter JEE Enrollment no" id="enrollmentInput"/>
                    </div>

                    <button type="submit" className="btn-submit btn-primary w-40 solid text-center my-5" onClick={verify}>Submit</button>
                </form>

            </div>

        </div>
    );
};

export default Admission;
