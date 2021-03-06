import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import firebase from "firebase/compat";
const CourseSel = () => {
  const history = useHistory()
  const firestoreDb = firebase.firestore()
  const [inputList, setInputList] = useState([{ courseName: "", courseCode: "" }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
     setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { courseName: "", courseCode: "" }]);
  };


  const uploadCourses = ()=>{
    const sem = document.getElementById("courseSelect").value

    inputList.forEach((value,key)=>{

      console.log(value)
      firestoreDb.collection("Courses").doc(value.courseCode).set({
        "CourseName":value.courseName,
        "Semester":sem
      }).then(()=>{

      })
    })



  }


return (
	<div className='container d-flex-vertical justify-content-center px-auto w-50'>
      <div className='d-flex px-auto mt-6 mb-5 justify-content-between'>
        <p className="h5 my-auto"><b>Select Semester</b></p>
        <div><span className='bg-black border-gray-400 btn btn-primary' onClick={()=>{history.goBack()}}>Back</span></div>
      </div>
    <select className="form-select" aria-label="Default select example" id='courseSelect'>
  <option selected>Sem-1</option>
  <option >Sem-2</option>
  <option >Sem-3</option>
  <option>Sem-4</option>
  <option >Sem-5</option>
  <option >Sem-6</option>
  <option >Sem-7</option>
  <option >Sem-8</option>
</select>
      {inputList.map((x, i) => {
        return (
          <div className="container d-flex justify-content-center px-auto w-50 ">
             <div className="d-flex">
               <label className='m-10 my-auto' htmlFor="exampleInputEmail1"> Name</label>
               <input
                   className="p-3 m-10 "
                   name="courseName"
                   placeholder="Enter course Name"
                   value={x.courseName}
                   onChange={e => handleInputChange(e, i)}
               />
             </div>
              <div className="d-flex">
                <label className='m-10 my-auto' htmlFor="exampleInputEmail1"> Code</label>
                <input
                    className="p-3 m-10"
                    name="courseCode"
                    placeholder="Enter course code"
                    value={x.courseCode}
                    onChange={e => handleInputChange(e, i)}
                />
              </div>
            <div className="">
              {inputList.length !== 1 && <button
               className="btn btn-primary mb-2 mt-10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button  className="btn btn-primary mb-2 p-3 " onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

<button type="button" className="btn btn-outline-dark" onClick={()=>{uploadCourses()
  setTimeout(() => {
    alert("Course has been added successfully")
    history.goBack()
  }, 2500)

}} >Submit</button>
    </div>
);
};

export default CourseSel;



 
