import React, { useState } from "react";
import "../Styles/AdmissionForm.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdmissionForms = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <form action="/" style={{border: '1px solid #ccc'}}>
                <div className="container d-flex-vertical">
                    <br/>
                    <br/>
                    <h2>Admission form details</h2>
                    <p>Please fill in this form with the correct data which is filled during counselling and JEE application.</p>
                    <hr/>
                    <label htmlFor="name"><b>Name</b></label>
                    <br/>
                    <input type="text" placeholder="Enter name" name="name" required/>
                    <br/>
                    <label htmlFor="dob"><b>Select date of birth</b></label>

                    <DatePicker id="dob" name="dob" className="btn btn-outline-secondary btn-sm w-auto" selected={startDate} onChange={(date) => setStartDate(date)} />


                    <div className="dropdown">
                        <button className="btn btn-outline-secondary w-auto dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Gender
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Male</a></li>
                            <li><a className="dropdown-item" href="#">Female</a></li>
                            <li><a className="dropdown-item" href="#">Transgender</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-outline-secondary w-auto dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Reservation Category
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">General</a></li>
                            <li><a className="dropdown-item" href="#">OBC</a></li>
                            <li><a className="dropdown-item" href="#">SC</a></li>
                            <li><a className="dropdown-item" href="#">ST</a></li>
                            <li><a className="dropdown-item" href="#">General EWS</a></li>
                            <li><a className="dropdown-item" href="#">Physically Disabled</a></li>
                        </ul>
                    </div>
                    <br/><br/>
                    <label htmlFor="address"><b>Address</b></label>
                    <input type="text" placeholder="Enter address" name="address" required/>
                    <br/>
                    <label htmlFor="aadhar"><b>Aadhar Number</b></label>
                    <br/>
                    <input type="number" placeholder="Enter Aadhar Number" name="aadhar" required/>
                    <br/><br/>
                    <label htmlFor="fname"><b>Father Name</b></label>
                    <br/>
                    <input type="text" placeholder="Enter father's name" name="fname" required/>
                    <br/>
                    <label htmlFor="mname"><b>Mother Name</b></label>
                    <input type="text" placeholder="Enter mother's name" name="mname" required/>
                    <label htmlFor="fphone"><b>Father's Mobile</b></label>
                    <br/>
                    <input type="tel" id="fphone" name="fphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    <br/>
                    <label htmlFor="mphone"><b>Mother's Mobile</b></label>
                    <br/>
                    <input type="tel" id="mphone" name="mphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    <br/>
                    <label htmlFor="phone"><b>Mobile(self)</b></label>
                    <br/>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> <br/><br/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                    <label htmlFor="passYear"><b>Passing year </b></label>
                    <br/>
                    <DatePicker id="passYear" name="passYear" className="btn btn-outline-secondary btn-sm w-auto" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <br/><br/>
                    <label htmlFor="Eroll"><b>Entrance Exam Roll Number</b></label>
                    <input type="text" placeholder="Enter roll no" name="Eroll" required/>
                    <div className="dropdown">
                        <button className="btn btn-outline-secondary w-auto dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Select branch
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Computer Science</a></li>
                            <li><a className="dropdown-item" href="#">Information Technology</a></li>
                        </ul>
                    </div>
                    <br/>
                    <label htmlFor="tYear"><b>10th Passing year</b></label>
                    <br/>
                    <DatePicker id="tYear" name="dob" className="btn btn-outline-secondary btn-sm w-auto" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <label htmlFor="twYear"><b>12th Passing year</b></label>
                    <DatePicker id="twYear" name="dob" className="btn btn-outline-secondary btn-sm w-auto" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <br/><br/>
                    <label htmlFor="focc"><b>Father's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="focc" required/>
                    <label htmlFor="Mocc"><b>Mother's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="Mocc" required/>
                    {/*<label>*/}
                    {/*    <input type="checkbox" defaultChecked="checked" name="remember"*/}
                    {/*           style={{marginBottom: '15px'}}/> Remember me*/}
                    {/*</label>*/}
                    <p>We do not share this information with any other person or organisation. <a href="#"
                                                                  style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.
                    </p>
                    <div className="d-flex">
                        <button className= "btn btn-outline-success w-50 solid text-center mx-2">Submit form</button>

                        <button className= "btn btn-outline-danger w-50 solid text-center mx-2">Cancel</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AdmissionForms;
