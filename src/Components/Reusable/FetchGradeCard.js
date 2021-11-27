import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import {useParams} from "react-router-dom";

const FetchGradeCard = () => {
    const firestoreDb = firebase.firestore()
    const[role,setRole] = useState();
    const[events,setEvents]=useState();
    const {id,docName} = useParams();


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
        <div className="container"
        >
            {events ? (

                    <div className="container mx-auto sm:mt-20 w-full h-full">
                        <div>
                            <h1>
                                {docName}
                            </h1>
                        </div>
                        <iframe id='docs'
                                src={events}
                                width="1400px"
                                height="800px"
                                frameBorder="0">
                        </iframe>

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

export default FetchGradeCard;
