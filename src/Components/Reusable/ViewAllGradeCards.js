import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const ViewAllGradeCards = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState();
    const firestoreDb = firebase.firestore()
    const history = useHistory();
    const {id} = useParams();



    function fetchEvents() {


        firestoreDb.collection('Students2021').where("AdmissionFormId", '==', id).get().then((doc) => {
            firestoreDb.collection('Students2021').doc(doc.docs[0].id).collection('Grades').get().then((res) => {
                setEvents(res.docs);


                console.log(res, "res")

            })
                .catch((err) => {
                    throw err
                });

            console.log(events, "ok")
        })
    }

    useEffect(() => {
        fetchEvents();
        console.log(events,"3")
    }, []);





    return (
        <div className="container mx-auto sm:mt-20">
            { events && events.length ? (
                <div className="mx-auto">

                    {events.map((value, key) => {
                        return (
                            <div className="flex flex-col pb-16 divide-dashed > * + *">
                                <div>
                                    <h1 className='pb-6 font-bold text-xl'>
                                        {value.data().gradecardName}
                                    </h1>
                                </div>
                                <iframe id='docs'
                                        src={value.data().downloadUrl}
                                        width="1400px"
                                        height="800px"
                                        frameBorder="0">
                                </iframe>
                            </div>
                        );
                    })}
                </div>
            ) : (
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
            )}
        </div>
    );
};

export default ViewAllGradeCards;
