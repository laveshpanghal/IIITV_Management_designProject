import React, { useState } from 'react';

const CourseSel = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
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
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
return (
	<div className='container d-flex-vertical justify-content-center px-auto w-50'>
    <p class="h5 ">Select Semester</p>
    <select className="form-select" aria-label="Default select example">
  <option selected>Sem-1</option>
  <option value="1">Sem-2</option>
  <option value="2">Sem-3</option>
  <option value="3">Sem-4</option>
  <option value="4">Sem-5</option>
  <option value="5">Sem-6</option>
  <option value="6">Sem-7</option>
  <option value="7">Sem-8</option>
</select>
      {inputList.map((x, i) => {
        return (
          <div className="container d-flex justify-content-center px-auto w-50 ">
             <label className='m-10 my-auto' for="exampleInputEmail1"> Name</label>
            <input
             className="p-3 m-10 "
              name="firstName"
   placeholder="Enter course Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
              <label className='m-10 my-auto' for="exampleInputEmail1"> Code</label>
            <input
              className="p-3 m-10"
              name="lastName"
   placeholder="Enter course code"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="">
              {inputList.length !== 1 && <button
               className="btn btn-primary mb-2 mt-10" 
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button  className="btn btn-primary mb-2 p-3 " onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}

<button type="button" class="btn btn-outline-dark" >Submit</button>
    </div>
);
};

export default CourseSel;



 
