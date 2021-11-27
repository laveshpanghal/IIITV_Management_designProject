import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
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


                setTemp(res.docs)

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
                                    <h1>
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
                <div>
                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewAllGradeCards;
