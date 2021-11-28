import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const StudentCourseRequests = ({}) => {

    const firestoreDb = firebase.firestore()
    const history = useHistory();
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const stuCouReqs = []



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
                                    <span onClick={()=>{history.push(`/Admin/${value.data().data.entranceExamRollNo}`)}}

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
