import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import {useHistory, useParams} from "react-router-dom";

const FetchAcademicCalender = () => {
    const firestoreDb = firebase.firestore()
    const[role,setRole] = useState();
    const[events,setEvents]=useState();
    const {id,docName} = useParams();
    const history = useHistory();

    function fetchEvents() {

            firestoreDb.collection('AcademicCalender').doc(docName).get().then((res) => {
                setEvents(res.data());
                console.log(res, "res")

            })
                .catch((err) => {
                    throw err
                });


    }

    useEffect(() => {
        fetchEvents();
        console.log(events,"3")
    }, []);





    return (
        <div className="container"
        >

            {events ? (

                    <div className="container mx-auto sm:mt-20 w-full h-full pr-2">
                        <div className='pb-6 font-bold text-xl flex flex-row justify-between'>
                            <div> <h1>

                                {docName}
                            </h1></div>

                            <div><span className='bg-black border-gray-400 btn btn-primary' onClick={()=>{history.goBack()}}>Back</span></div>
                        </div>
                        <iframe id='docs' className='w-full h-screen'
                                src={events.downloadUrl}
                                frameBorder="0">
                        </iframe>

                    </div>
                )
                : (
                    <div className="flex h-screen -mt-20 justify-center items-center">
                        <div className="w-8 lg:w-12 h-24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="animate-ping"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FetchAcademicCalender;
