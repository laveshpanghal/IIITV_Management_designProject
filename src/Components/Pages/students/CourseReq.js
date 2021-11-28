import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import firebase from "firebase/compat";
const CourseReq = () => {
    return (
        <div className='container d-flex-vertical justify-content-center px-auto w-50'>
            <p className="h5 mt-5">Select Semester</p>
            <select className="form-select" aria-label="Default select example" id='courseSelect'>
                <option selected>Sem-1</option>
                <option>Sem-2</option>
                <option>Sem-3</option>
                <option>Sem-4</option>
                <option>Sem-5</option>
                <option>Sem-6</option>
                <option>Sem-7</option>
                <option>Sem-8</option>
            </select>

            <p className="h5 mt-5 ">Select Branch</p>
            <select className="form-select" aria-label="Default select example" id='branchSelect'>
                <option selected>CS</option>
                <option>IT</option>
            </select>


            <button type="button" className="btn btn-primary mt-20" >Submit</button>
        </div>
    );
};

export default CourseReq;




