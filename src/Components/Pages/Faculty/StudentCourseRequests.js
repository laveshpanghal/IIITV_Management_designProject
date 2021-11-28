import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";
import {logDOM} from "@testing-library/react";

const StudentCourseRequests = ({}) => {

    const firestoreDb = firebase.firestore()
    const history = useHistory();
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const stuCouReqs = []
    const [showModal, setShowModal] = useState(false);



    useEffect(() => {
        fetchEvents();
    }, []);

    function fetchEvents() {
        setLoading(true);

        firestoreDb.collection("Students2021").where("courseApprovalStatus", "==", "pending").get().then((res) => {
            const events = res.docs;
            setEvents(events);
            console.log(events)
            setLoading(false);

        })
            .catch((err) => {
                throw err
            });


    }


    const handelDelete = (value)=>{

        firestoreDb.collection("Students2021").where("AdmissionFormId", "==", value.data().AdmissionFormId).get().then((res) => {
            firestoreDb.collection('Students2021').doc(res.docs[0].id).update({
                "courseApprovalStatus":"Rejected"
            }).then(()=>{
                alert('Course Req Rejected')
                setShowModal(false)
                window.location.reload()
            })

        })
            .catch((err) => {
                throw err
            });


    }
    const handelAccept = (value)=> {

        firestoreDb.collection("Students2021").where("AdmissionFormId", "==", value.data().AdmissionFormId).get().then((res) => {
            firestoreDb.collection('Students2021').doc(res.docs[0].id).update({
                "courseApprovalStatus": "Accepted"
            }).then(() => {
                alert('Course Req Accepted')
                setShowModal(false)
                window.location.reload()
            })

        })
            .catch((err) => {
                throw err
            });
    }


        return (
        <div className="container mx-auto sm:mt-20">

            <div className='d-flex mx-20 px-20 mt-6 mb-5 mb-5 justify-content-between'>
                <p className="h5 my-auto"><b>Students Course Approval Request</b></p>
                <div><span className='bg-black border-gray-400 btn btn-primary' onClick={()=>{history.goBack()}}>Back</span></div>
            </div>

            {!loading && events && events.length ? (
                <div className="mx-auto">
                    {events.map((value, key) => {
                        return (
                            <div
                                className="w-full sm:w-2/3 mx-auto px-8 py-4 bg-white rounded-lg shadow-md mt-3.5"
                                key={key}
                            >
                                <div className="flex justify-between items-center">
                  <span className="font-light text-gray-600 text-sm">
                    {value.data().Course}
                  </span>
                                    <span onClick={()=>{setShowModal(true)}}

                                          className="px-3 py-1 bg-gray-600 text-gray-100 text-sm font-bold rounded hover:bg-gray-500 cursor-pointer"
                                    >
                                        Verify
                                    </span>

                                </div>

                                <div className="mt-2">
                                    {value.data().Name
                                        ? value.data().Name
                                        : "Name??404"}
                                    <p className="mt-2 text-gray-600">
                                        {value.data().AdmissionFormId
                                            ? value.data().AdmissionFormId
                                            :"Roll no?? 404"}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h6 className="text-gray-600 hover:underline font-bold">
                                            {value.data().Branch ? value.data().Branch : "404"}
                                        </h6>
                                        <h6
                                            className="text-gray-600 hover:underline"

                                        >
                                            Course Request : {value.data().courseApprovalStatus ? value.data().courseApprovalStatus : "404"}
                                        </h6>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex flex-col items-start">
                                            <a className="text-gray-700 text-sm font-bold cursor-pointer">
                                                {value.data().name ? value.data().name : ""}
                                            </a>

                                        </div>
                                    </div>
                                </div>

                                {showModal ? (
                                    <>
                                        <div
                                            className=" w-2/4 left-1/4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        >
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">

                                                <div
                                                    className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                                    <div className="px-4 py-8 sm:px-10">
                                                        <div className="relative mt-6">
                                                            <div className="absolute inset-0 flex items-center">
                                                                <div className="w-full border-t border-gray-300">
                                                                </div>
                                                            </div>
                                                            <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-white">
                    Alert Details
                </span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-6">
                                                            <div className="w-full space-y-6">
                                                                <div className="w-full">
                                                                    <div className=" relative ">
                                                                        COURSE CODES:
                                                                        <hr/>
                                                                        <p>
                                                                            {value.data().Courses.map((e)=>{return(

                                                                                <div>
                                                                                    <li>{e}</li>
                                                                                </div>
                                                                            )



                                                                            })}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-row... justify-between'>

                                                        <div className="p-2 md:w-40 " onClick={() => {handelDelete(value)}}>
                                                            <div
                                                                className="flex  items-center p-2 bg-red-200 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">

                                                                <div className='text-center' >
                                                                    <p className=" text-xs  font-medium ml-2 pl-6  ">
                                                                        DENY
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-2 md:w-40 " onClick={() => {handelAccept(value)}}>
                                                            <div
                                                                className="flex items-center p-2 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100"


                                                            >

                                                                <div >
                                                                    <p className=" text-xs font-medium ml-2 pl-4 ">
                                                                        ACCEPT
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}


                            </div>
                        );
                    })}







                </div>
            ) : (
                <div>
                    No Events
                </div>
            )}
        </div>
    );
};

export default StudentCourseRequests;
