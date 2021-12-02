import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const VerifyDoc = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState([]);
    const firestoreDb = firebase.firestore()
    const {id,docName} = useParams();
    const history = useHistory();





// const handleVerify = ()=>{
//
//
//     const convertArrayToObject = (array, key) =>
//         array.reduce(
//             (obj, item) => ({
//                 ...obj,
//                 [item[key]]: item
//             }),
//             {}
//         );
//
//     const document = convertArrayToObject(temp,temp.documentName)
//
//     firestoreDb.collection("AdmissionForms2021").doc(id).update({document
//     }).then()
// }



    function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").doc(docName).get().then((res) => {
            setEvents(res.data().downloadURL);



            // setTemp(res.data().documents)


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


// if(temp!==null){
//
//     handleVerify()
//
// }



    return (
        <div className="h-full w-full">
            <div className="px-4 py-4 sm:px-6 d-flex justify-content-between ">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Go to Documents page for action(Verify/Reject)
                </h3>
                <span className='btn btn-secondary w-20 '  onClick={(e)=>{history.goBack()}}>Back</span>
            </div>

        {events ? (

                <div className="container mx-auto sm:mt-20 w-full h-full">
                    <iframe id='docs'
                        src={events}
                            width="1400px"
                            height="800px"
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

export default VerifyDoc;
