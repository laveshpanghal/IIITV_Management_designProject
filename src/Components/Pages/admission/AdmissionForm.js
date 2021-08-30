import React, {useState} from "react";
import "../Styles/AdmissionForm.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import realDb from "../../../index";
import {ref,set} from "firebase/database";
import {useHistory} from "react-router-dom";
import ReactDOM from "react-dom";
import App from "../../../App";
import AdmissionDocumentUpload from "./AdmissionDocumentUpload";
const AdmissionForms = () => {
    const history =useHistory()

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
            entranceExamRollNo: "",
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



    const handleAdmissionFormSubmit = (e) => {

        e.preventDefault()
        console.log(data)

    set(ref(realDb,"AdmissionForms/2021/"+data.entranceExamRollNo),data).then(()=>{
        // history.push('/AdmissionDocumentUpload')


    });
        history.push('/AdmissionDocumentUpload')

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
                    <br/><br/>
                    <label htmlFor="dob"><b>Select date of birth</b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        placeholder="select Date of birth"
                        name="dob"
                        onChange={(e) => onChange(e)}
                    />
                    <br/><br/>
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

                    <label htmlFor="address"><b>Address</b></label>
                    <input type="text" placeholder="Enter address" name="parmanentAddress" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="aadhar"><b>Aadhar Number</b></label>
                    <br/>
                    <input type="number" placeholder="Enter Aadhar Number" name="adharCardNo" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="fname"><b>Father Name</b></label>
                    <br/>
                    <input type="text" placeholder="Enter father's name" name="fathersName" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="mname"><b>Mother Name</b></label>
                    <input type="text" placeholder="Enter mother's name" name="mothersName" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="fphone"><b>Father's Mobile</b></label>
                    <br/>
                    <input type="tel" id="fphone" name="fathersMobileNo" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="mphone"><b>Mother's Mobile</b></label>
                    <br/>
                    <input type="tel" id="mphone" name="mothersMobileNo" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="phone"><b>Mobile(self)</b></label>
                    <br/>
                    <input type="tel" id="phone" name="personalMobileNo" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                           onChange={onChange}/> <br/><br/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="emailAddress" required onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="passYear"><b>Passing year </b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        placeholder="select Date of birth"
                        name="yearOfPassingJEE"
                        onChange={(e) => onChange(e)}
                    />
                    <br/><br/>
                    <label htmlFor="Eroll"><b>Entrance Exam Roll Number</b></label>
                    <input type="text" placeholder="Enter roll no" name="entranceExamRollNo" required
                           onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="branch"><b>Branch</b></label>
                    <br/>
                    <select name="branch" id="branch" required onChange={(e) => onChange(e)}>
                        <option value="computerScience">Computer Science</option>
                        <option value="IT">IT</option>
                    </select>
                    <br/><br/>
                    <label htmlFor="tYear"><b>10th Passing year</b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        placeholder="select Date of birth"
                        name="yearOfPassing10"
                        onChange={(e) => onChange(e)}/>
                    <br/><br/>
                    <label htmlFor="twYear"><b>12th Passing year</b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        placeholder="select Date of birth"
                        name="yearOfPassing12"
                        onChange={(e) => onChange(e)}
                    />
                    <br/><br/>
                    <label htmlFor="focc"><b>Father's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="fathersOccupation" required onChange={onChange}/>
                    <br/><br/>
                    <label htmlFor="Mocc"><b>Mother's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="mothersOccupation" required onChange={onChange}/>
                    {/*<p>We do not share this information with any other person or organisation. <a href="#"*/}
                    {/*                                                                              style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.*/}
                    {/*</p>*/}
                    <br/><br/><br/>
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
