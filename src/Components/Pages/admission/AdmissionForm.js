import React, {useState} from "react";
import "../Styles/AdmissionForm.css"
import realDb from "../../../index";
import {ref,set} from "firebase/database";
import {useHistory} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import "firebase/firestore";
import firebase from "firebase/compat";


const AdmissionForms = () => {
    const{rollNo}= useApp();
    const history = useHistory()
    const{degree}=useApp();
    const{setDegree}=useApp();
    const firestoreDb = firebase.firestore()
    const[documents, setDocument]=useState({})
    const[Course ,setCourse] = useState({
        Course:'B.Tech'
    })
    const [data, setData] = useState(
        {
            name: "",
            dob: "",
            gender: "Male",
            reservationCatagory: "general",
            parmanentAddress: "",
            adharCardNo: "",
            fathersName: "",
            mothersName: "",
            fathersMobileNo: "",
            mothersMobileNo: "",
            personalMobileNo: "",
            emailAddress: "",
            entranceExamRollNo: rollNo,
            branch: "computerScience",
            yearOfPassing12: "",
            yearOfPassing10: "",
            fathersOccupation: "",
            mothersOccupation: "",
            yearOfPassingJEE: "",
        }
    )

    function onChange(e) {
        e.persist();
        setData(() => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }
    function onDegreeSelectChange(e) {
        e.persist();
        setCourse(
            {
                [e.target.name]: e.target.value,
            }
        )
        console.log(degree)
        setDegree(e.target.value)

    }


    const handleAdmissionFormSubmit = (e) => {

        e.preventDefault()
        console.log(data)


        if (data.name === ""){
            alert("Name field is empty.")
            return;
        }
        if (data.dob === ""){
            alert("Date of birth field is empty.")
            return;
        }
        if (data.parmanentAddress === ""){
            alert("Address field is empty.")
            return;
        }
        if (data.adharCardNo === ""){
            alert("Aadhar No field is empty.")
            return;
        }
        if (data.fathersName === ""){
            alert("Father's name field is empty.")
            return;
        }
        if (data.mothersName === ""){
            alert("Mother's name field is empty.")
            return;
        }
        if (data.fathersMobileNo === ""){
            alert("Father's mobile no field is empty.")
            return;
        }
        if (data.mothersMobileNo === ""){
            alert("Mother's mobile no field is empty.")
            return;
        }
        if (data.personalMobileNo === ""){
            alert("Personal mobile no field is empty.")
            return;
        }
        if (data.emailAddress === ""){
            alert("Email field is empty.")
            return;
        }

        if (data.yearOfPassing10 === ""){
            alert("Year of passing 10 field is empty.")
            return;
        }
        if (data.yearOfPassing12 === ""){
            alert("Year of passing 12 field is empty.")
            return;
        }
        if (data.fathersOccupation === ""){
            alert("Father's occupation field is empty.")
            return;
        }
        if (data.mothersOccupation === ""){
            alert("Mother's occupation field is empty.")
            return;
        }
        if (data.yearOfPassingJEE === ""){
            alert("Year of passing JEE field is empty.")
            return;
        }


        firestoreDb.collection("AdmissionForms2021").doc(rollNo).set({data,"status":"pending",...Course}).then(()=>{
        history.push('/AdmissionDocumentUpload')

    })


    }


    return (
        <div>
            <form action="/" style={{border: '1px solid #ccc'}}>
                <div className="container d-flex-vertical">
                    <br/>
                    <br/>
                    <h2>Admission form details</h2>
                    <p>Please fill in this form with the correct data which is filled during counselling and JEE
                        application.</p>
                    <hr/>
                    <label htmlFor="name"><b>Name</b></label>
                    <br/>
                    <input type="text" placeholder="Enter name" name="name" required onChange={onChange}/>
                    <br/>
                    <label htmlFor="dob"><b>Select date of birth</b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        min="1995-01-01" max="2006-12-31"
                        placeholder="select Date of birth"
                        name="dob"
                        onChange={(e) => onChange(e)}
                    />
                    <br/>
                    <label htmlFor="gender"><b>Gender</b></label>
                    <br/>
                    <select name="gender" id="gender" required onChange={(e) => onChange(e)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/><br/>
                    <label htmlFor="Reservation"><b>Reservation Category</b></label>
                    <br/>
                    <select name="reservationCatagory" id="reservationCatagory" required onChange={(e) => onChange(e)}>
                        <option value="general">General</option>
                        <option value="SC/ST">SC/ST</option>
                        <option value="OBC">OBC</option>
                        <option value="minority">Minority</option>
                        <option value="other">Other</option>
                    </select><br/><br/>

                    <br/><br/>
                    <label htmlFor="address"><b>Address</b></label>
                    <input type="text" placeholder="Enter address" name="parmanentAddress" required
                           onChange={onChange}/>
                    <br/>
                    <label htmlFor="aadhar"><b>Aadhar Number</b></label>
                    <br/>
                    <input type="number" size="12" placeholder="Enter Aadhar Number" name="adharCardNo" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="fname"><b>Father Name</b></label>
                    <br/>
                    <input type="text" placeholder="Enter father's name" name="fathersName" required
                           onChange={onChange}/>
                    <br/>
                    <label htmlFor="mname"><b>Mother Name</b></label>
                    <input type="text" placeholder="Enter mother's name" name="mothersName" required
                           onChange={onChange}/>
                    <label htmlFor="fphone"><b>Father's Mobile</b></label>
                    <br/>
                    <input type="tel" size='10' placeholder="Enter mobile no without country code" id="fphone" name="fathersMobileNo" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                           onChange={onChange}/>
                    <br/>
                    <label htmlFor="mphone"><b>Mother's Mobile</b></label>
                    <br/>
                    <input type="tel" id="mphone" size='10' name="mothersMobileNo" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                           onChange={onChange}/>
                    <br/>
                    <label htmlFor="phone"><b>Mobile(self)</b></label>
                    <br/>
                    <input type="tel" id="phone" name="personalMobileNo" size='10' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                           onChange={onChange}/> <br/><br/>
                    <label htmlFor="email"  type="email"
                           pattern=".+@globex\.com" required><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="emailAddress" required onChange={onChange}/>
                    <label htmlFor="passYear"><b>Passing year </b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        min="2021-01-01" max="2021-12-31"
                        placeholder="select Date of birth"
                        name="yearOfPassingJEE"
                        onChange={(e) => onChange(e)}
                    />
                    <br/><br/>
                    <label htmlFor="Eroll"><b>Entrance Exam Roll Number</b></label>
                    <input type="text" placeholder={rollNo} value={rollNo} disabled name="entranceExamRollNo" required

                          />
                    <br/>
                    <label htmlFor="degreeSelect"><b>Please select any one of provided </b></label>
                    <br/>
                    <select name="Course" id="degreeSelect" required  onChange={(e)=>{ onDegreeSelectChange(e)}}>
                        <option value="B.Tech" selected>B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                    </select><br/><br/>
                    <label htmlFor="branch"><b>Branch</b></label>
                    <br/>
                    <select name="branch" id="branch" required onChange={(e) => onChange(e)}>
                        <option value="computerScience">Computer Science</option>
                        <option value="IT">IT</option>
                    </select>
                    <br/>
                    <label htmlFor="tYear"><b>10th Passing year</b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        min="2017-01-01" max="2019-12-31"
                        placeholder="select Date of birth"
                        name="yearOfPassing10"
                        onChange={(e) => onChange(e)}/>
                    <br/>
                    <label htmlFor="twYear"><b>12th Passing year</b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        min="2019-01-01" max="2021-12-31"
                        placeholder="select Date of birth"
                        name="yearOfPassing12"
                        onChange={(e) => onChange(e)}
                    />
                    <br/><br/>
                    <label htmlFor="focc"><b>Father's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="fathersOccupation" required onChange={onChange}/>
                    <label htmlFor="Mocc"><b>Mother's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="mothersOccupation" required onChange={onChange}/>
                    {/*<p>We do not share this information with any other person or organisation. <a href="#"*/}
                    {/*                                                                              style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.*/}
                    {/*</p>*/}
                    <div className="d-flex">
                        <button className="btn btn-outline-success w-50 solid text-center mx-2"
                                onClick={handleAdmissionFormSubmit}>Submit form
                        </button>

                        <button className="btn btn-outline-danger w-50 solid text-center mx-2">Back</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AdmissionForms;
