
import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";




const FacultyEnrolledStudents = ({onClick,onChange}) => {

    const [events, setEvents] = useState(null);
    const [data, setData] = useState(null);
    const firestoreDb = firebase.firestore()
    const history = useHistory();

    useEffect(() => {
        fetchEvents();
    }, []);

    function fetchEvents() {

        firestoreDb.collection("Faculty").where("FacultyId", "==", firebase.auth().currentUser.uid).get().then((res) => {
         firestoreDb.collection('Faculty').doc(res.docs[0].id).get().then((doc)=>{
             setEvents(doc.data())
         })


        })
            .catch((err) => {
                throw err
            });



    }


const SearchHandel = ()=>{

var id = document.getElementById('CourseSelId').value
    firestoreDb.collection('Students2021').where()

    setData()

}






    return (<div className='pt-12'>
            {


                data?(
                    <div>


                    </div>


                ):(events? (
                    <div className=" bg-gray-100 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                        <div className="px-4 py-8 sm:px-10">
                            <div className="relative mt-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300">
                                    </div>
                                </div>
                                <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-gray-100">
                    Select Courses
                </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="w-full space-y-6">
                                    <div className="w-full">
                                        <div className=" relative ">
                                            <select className='w-full' id='CourseSelId'>
                                                {
                                                    events.CourseCode.map((e)=>{
                                                        console.log(e)
                                                        return(


                                                            <option>{e}</option>


                                                        )

                                                    })

                                                }

                                            </select>
                                        </div>
                                    </div>



                                    <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" onClick={()=>{SearchHandel()}}
                                            className="py-2 px-4  bg-gray-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Search
                                    </button>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ):(
                    <div></div>
                ))









            }
        </div>




    );
};

export default FacultyEnrolledStudents;
















