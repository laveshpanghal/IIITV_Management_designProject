import React from 'react';

const Admission = () => {
return (
	<div className="container justify-content-center">
	<h3 className="my-20">Enter your JEE Enrollment no. to verify</h3>

	<form className="d-flex-vertical">
	<div className="form-group ">
		<label htmlFor="exampleInputEmail1">Email enrollment no</label><br/>
		<input type="number" id="enrollmentInput" />
	</div>
	
	<button type="submit" className="btn btn-primary">Submit</button>
	</form>

	</div>
);
};

export default Admission;
