import React, {useEffect, useState} from "react";
import "../Styles/Admindash.css"
import {useParams, useHistory} from "react-router-dom";
import firestore from "firebase/compat";
import firebase from "firebase/compat";
import {useApp} from "../../../Context/AppContext";

const AdmissionReq = () => {
    const firestoreDb = firebase.firestore()
    const history = useHistory();
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetchEvents();
    }, []);

    function fetchEvents() {
        setLoading(true);

        firestoreDb.collection("AdmissionForms2021").where("status", "==", "pending").get().then((res) => {
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
                                        {value.data().data.name
                                            ? value.data().data.name
                                            : "Name??404"}
                                    <p className="mt-2 text-gray-600">
                                        {value.data().data.entranceExamRollNo
                                            ? value.data().data.entranceExamRollNo
                                            :"Roll no?? 404"}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h6 className="text-gray-600 hover:underline font-bold">
                                            {value.data().data.branch ? value.data().data.branch : "404"}
                                        </h6>
                                        <h6
                                            className="text-gray-600 hover:underline"

                                        >
                                            {value.data().status ? value.data().status : "404"}
                                        </h6>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex flex-col items-start">
                                            <a className="text-gray-700 text-sm font-bold cursor-pointer">
                                                {value.data().name ? value.data().name : ""}
                                            </a>
                                            <span className="text-gray-700 text-xs cursor-pointer">
                        {value.data().contact ? value.data().contact : ""}
                      </span>
                                            <span className="text-gray-700 text-xs cursor-pointer">
                        {value.data().email ? value.data().email : ""}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>
                    No Admission requests
                </div>
            )}
        </div>
    );
};


export default AdmissionReq;