import React from 'react';

const CourseSel = () => {
return (
	<div className="container d-flex-vertical justify-content-center px-auto" >
	<form className="  w-75" style={{ }}>
        <h3 className=" fw-bold">Course Selection form</h3>
  <div  className="form-group ">
    <label className="fw-bold" for="Roll">Roll No </label>
    <input type="email" className="form-control w-50" id="Roll" placeholder="201951049"/>
  </div>
  <div className="form-group ">
    <label className="fw-bold" for="Batch">Batch</label>
    <select className="form-control  w-50 " id="Batch">
      <option>2018-19</option>
      <option>2019-20</option>
      <option>2020-21</option>
    </select>
    <label className="fw-bold" for="Branch">Branch</label>
    <select className="form-control w-50" id="Branch">
      <option>CS</option>
      <option>IT</option>
    </select>
    
  </div>
  <div class="form-check">
  <h5 className="fw-bold" style={{marginTop:'15px'}}> Select Course </h5>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Operating System
  </label><br/>
  <input class="form-check-input" type="checkbox" value="" id="id-1"/>
  <label class="form-check-label" for="id-1">
    Database Management System
  </label><br/>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Cloud Computing
  </label><br/>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Information Retrieval
  </label><br/>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Software Engineering
  </label>
  </div>
  <div className="d-flex justify-content-center" >
  <button style={{width :'150px'}} type="submit" className="btn btn-primary ">Submit</button>
</div>
</form>
	</div>
);
};

export default CourseSel;
