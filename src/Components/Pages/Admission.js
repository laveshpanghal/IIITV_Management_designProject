import React from 'react';
import "../../Login/login.css"

function verify(){

	var applicantEnrollmentNo = document.getElementById("enrollmentInput").value;
	if(applicantEnrollmentNo == null){
		alert("Enrollment no should not be blank");
	
	}else{
	
}}

const Admission = () => {
return (
	<div className="container text-center">
	
		<div className="card w-50 my-5 mx-auto">

			<br/>
			<br/>

			<h3 className="my-20">Enter your JEE Enrollment no. to verify</h3>

			<form className="d-flex-vertical my-10">
			<div className="form-group ">
				<br/>
				<input className="input-field" id="enrollmentInput" />
			</div>

			<button type="submit" className="btn btn-primary my-5" onClick={verify}>Submit</button>
			</form>

		</div>

	</div>
);
};

export default Admission;
