import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const Alldocs = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState();
    const firestoreDb = firebase.firestore()
    const {id} = useParams();
    const history = useHistory();

    const handleAcceptAll =()=>{
        events.map((value,key)=>{
            firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").doc(value.data().documentName).update({
                "verified":true
            }).then(()=>{
                history.push(`/Admin/VerifyFees/${id}`)

            })

        })






    }







    function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").get().then((res) => {
            setEvents(res.docs);


            setTemp(res.docs)

            console.log(res,"res")

        })
            .catch((err) => {
                throw err
            });

        console.log(events,"ok")
    }

    useEffect(() => {
        fetchEvents();
        console.log(events,"3")
    }, []);





    return (
        <div className="container mx-auto sm:mt-20">
            { events && events.length ? (
                <div className="mx-auto">
                        <div className="text-center justify-around">
                            <h2>Accept all documents at once</h2>
                            <button onClick={handleAcceptAll}
                                className="p-2 pl-5 pr-5 w-96 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">Accept All
                            </button>
                    </div>
                    {events.map((value, key) => {
                        return (
                            <div className="flex flex-col pb-16 divide-dashed > * + *">
                                <iframe id='docs'
                                        src={value.data().downloadURL}
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

export default Alldocs;
