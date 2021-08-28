import React from 'react';
import "../Styles/AdmissionForm.css"

const AdmissionForms = () => {
    return (
        <div>
            <form action="action_page.php" style={{border: '1px solid #ccc'}}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>
                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter name" name="name" required/>
                    <label htmlFor="dob"><b>DOB</b></label>
                    <input type="date" id="dob" name="dob" required/>
                    <label htmlFor="gender"><b>Gender</b></label>
                    <select name="gender" id="gender" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="Reservation"><b>Reservation Category</b></label>
                    <select name="Reservation" id="Reservation" required>
                        <option value="general">General</option>
                        <option value="SC/ST">SC/ST</option>
                        <option value="OBC">OBC</option>
                        <option value="minority">Minority</option>
                        <option value="other">Other</option>
                    </select><br/><br/>
                    <label htmlFor="address"><b>Address</b></label>
                    <input type="text" placeholder="Enter address" name="address" required/>
                    <label htmlFor="aadhar"><b>Aadhar Number</b></label>
                    <input type="text" placeholder="Enter Aadhar Number" name="aadhar" required/>
                    <label htmlFor="fname"><b>Father Name</b></label>
                    <input type="text" placeholder="Enter father's name" name="fname" required/>
                    <label htmlFor="mname"><b>Mother Name</b></label>
                    <input type="text" placeholder="Enter mother's name" name="mname" required/>
                    <label htmlFor="fphone"><b>Father's Mobile</b></label>
                    <input type="tel" id="fphone" name="fphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    <label htmlFor="mphone"><b>Mother's Mobile</b></label>
                    <input type="tel" id="mphone" name="mphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    <label htmlFor="phone"><b>Mobile(self)</b></label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> <br/><br/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                    <label htmlFor="year"><b>Passing year </b></label>
                    <input type="month" id="year" name="year" min="2014-03" defaultValue="2014-05" required/><br/><br/>
                    <label htmlFor="Eroll"><b>Entrance Exam Roll Number</b></label>
                    <input type="text" placeholder="Enter roll no" name="Eroll" required/>
                    <label htmlFor="branch"><b>Branch</b></label>
                    <select name="branch" id="branch" required>
                        <option value="Male">Computer Science</option>
                        <option value="Female">IT</option>
                    </select>
                    <label htmlFor="Tyear"><b>10th Passing year</b></label>
                    <input type="month" id="Tyear" name="Tstart" min="2014-03" defaultValue="2014-05" required/>
                    <label htmlFor="start"><b>12th Passing year</b></label>
                    <input type="month" id="start" name="start" min="2014-03" defaultValue="2014-05"
                           required/><br/><br/>
                    <label htmlFor="focc"><b>Father's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="focc" required/>
                    <label htmlFor="Mocc"><b>Mother's Occupation</b></label>
                    <input type="text" placeholder="occupation" name="Mocc" required/>
                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember"
                               style={{marginBottom: '15px'}}/> Remember me
                    </label>
                    <p>By creating an account you agree to our <a href="#"
                                                                  style={{color: 'dodgerblue'}}>Terms &amp; Privacy</a>.
                    </p>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AdmissionForms;
