import React, { useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import firebase from "firebase/compat";
import ReactDOM from "react-dom";
import {Form} from "react-bootstrap";
const CourseReq = () => {

    const history = useHistory()
    const firestoreDb = firebase.firestore()

    const {id} = useParams();

    const [courseList, setCourseList] = useState(null);
    const courses = []

    const handleInputChange = (e) => {
        checkSemesterStatus(e.target.value)
    };

    const handleCourseSelection = (e) => {

        //console.log(e.target.value)
        if (e.target.checked === true){
            courses.push(e.target.id)
            console.log(e.target.id+" added")
        } else{
            const index = courses.indexOf(e.target.id);
            if (index > -1) {
                courses.splice(index, 1);
            }
            console.log(e.target.id+" removed")
        }


    };

    function submitToUpload(){
        console.log(courses)
        firestoreDb.collection('Students2021').where("AdmissionFormId",'==',id).get().then((doc)=>{
            firestoreDb.collection('Students2021').doc(doc.docs[0].id).collection("Courses").doc().set({
                "courses" : courses,
                "status":"pending"



            }).then(()=>{
                alert("Course Request Sent")
                history.goBack()
            })
        })
    }

    function checkSemesterStatus(sem){
        firestoreDb.collection('Courses').where("Semester",'==',sem).get().then((doc)=>{


            const listItems = doc.docs.map((doc) =>
                <li>
                    <div className="my-auto">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox"  id={doc.id} label={doc.id+"  "+doc.data().CourseName} onChange={handleCourseSelection}/>
                            </Form.Group>
                        </Form>

                    </div>
                </li>
            );
            ReactDOM.render(
                <ul>{listItems}</ul>,
                document.getElementById('course-list')
            );

            // doc.forEach((doc, index) => {
            //     console.log(doc.id)
            //     setCourseList(doc.id)
            //     courses.push(doc.id)
            //     const element = <h1>{doc.id}</h1>;
            //     ReactDOM.render(element, document.getElementById('course-list'));
            //     //console.log(index)
            //     //console.log(doc.data())
            //
            // })


        })
    }


    return (
        <div className='container d-flex-vertical justify-content-center px-auto w-50'>
            <p className="h5 mt-5">Select Semester</p>
            <select className="form-select" aria-label="Default select example" id='courseSelect'
                    onChange={e => handleInputChange(e)}>
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
            <div className="mt-6" id="course-list"/>

            <button type="button" className="btn btn-primary mt-20" onClick={()=>{submitToUpload()}}>Submit</button>
        </div>
    );
};

export default CourseReq;




