import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";

const EnrollStatus = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState(false);
    const firestoreDb = firebase.firestore()
    const {id} = useParams();
    const history = useHistory();



    function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(id).get().then((res) => {
            setEvents(res.data());
            if(res.data().status==="accepted"){

                setTemp(true)

            }


        })
            .catch((err) => {
                throw err
            });

        console.log(events, "ok")

    }

    const handleClickButton = ()=>{
        history.push('/Admin#page3')
    }





    useEffect(() => {
        fetchEvents();
        console.log(events, "3")
    }, []);


    return (<div>
            {events ? (
                    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                        <div className="w-full h-full text-center">
                            <div className="flex h-full flex-col justify-between">
                                <svg className="h-12 w-12 mt-4 m-auto text-green-500" stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5 13l4 4L19 7">
                                    </path>
                                </svg>
                                <p className="text-gray-600 dark:text-gray-100 text-md py-2 px-6">
                                    {events.data.name +" "}
                                    <span className="text-gray-800 dark:text-white font-bold">
                                       id: {id+" "}
                </span>
                                    {temp?"has been successfully enrolled":"application rejected"}
                                </p>
                                <div className="flex items-center justify-between gap-4 w-full mt-8">
                                    <button type="button" onClick={handleClickButton}
                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Admission Request's
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : (<div>

                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                    </div>
                </div>)
            }

        </div>


    );
};

export default EnrollStatus;
