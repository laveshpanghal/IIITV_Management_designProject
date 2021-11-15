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

        firestoreDb.collection("Faculty").where("Status", "==", "pending").get().then((res) => {
            const events = res.docs;
            setEvents(events);
            console.log(events)
            setLoading(false);

        })
            .catch((err) => {
                throw err
            });


    }



    const HandleVerify = (value)=>{

        firestoreDb.collection('Faculty').doc(value.data().FacultyId).update({"Status": "Approved"}).then(()=>{

            window.location.reload()})
    }
    const HandleDeny = (value)=>{

        firestoreDb.collection('Faculty').doc(value.data().FacultyId).update({"Status": "Rejected"})
    }


    return (
        <div className="container mx-auto sm:mt-20">

            {!loading && events && events.length ? (
                <div className="w-2/4 mx-auto">
                    {events.map((value, key) => {
                        return (
                            <div
                                className=" bg-gray-200  flex flex-row... justify-between sm:mx-auto px-8 py-4 bg-white rounded-lg shadow-md mt-3.5"
                                key={key}
                            >
                                <div className="mt-2">
                                    Name -
                                    {

                                    value.data().Name
                                    ? value.data().Name
                                    : "Name??404"}

                            </div>
                                <div className="flex justify-between items-center">

                                    <span onClick={()=>{HandleVerify(value)}}

                                          className="px-3 ml-12 py-1 bg-gray-600 text-gray-100 text-sm font-bold rounded hover:bg-gray-500 cursor-pointer"
                                    >
                                        Verify
                                    </span>


                                </div>
                                <span onClick={()=>{HandleDeny(value)}}

                                      className="px-3  py-1 bg-gray-600 text-gray-100 text-sm font-bold rounded hover:bg-gray-500 cursor-pointer"
                                >
                                       Deny
                                    </span>


                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <h6
                                            className="text-gray-600 hover:underline"

                                        >
                                            {value.data().Status ? value.data().status : "404"}
                                        </h6>
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


export default AdmissionReq;