import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import {useHistory, useParams} from "react-router-dom";

const FetchGradeCard = () => {
    const firestoreDb = firebase.firestore()
    const[role,setRole] = useState();
    const[events,setEvents]=useState();
    const {id,docName} = useParams();
    const history = useHistory();

    function fetchEvents() {


        firestoreDb.collection('Students2021').where("AdmissionFormId", '==', id).get().then((doc) => {
            firestoreDb.collection('Students2021').doc(doc.docs[0].id).collection('Grades').doc(docName).get().then((res) => {
                setEvents(res.data());
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

                    <div className="container mx-auto sm:mt-20 w-full h-full pr-2">
                        <div className='pb-6 font-bold text-xl flex flex-row justify-between'>
                            <div> <h1>

                                {docName} Grade Card
                            </h1></div>

                            <div><span className='bg-black border-gray-400 btn btn-primary' onClick={()=>{history.goBack()}}>Back</span></div>
                        </div>
                        <iframe id='docs' className='w-full h-screen'
                                src={events.downloadUrl}
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
