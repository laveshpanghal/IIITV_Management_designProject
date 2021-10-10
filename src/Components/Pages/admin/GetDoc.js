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
        : (<div>

                <div className=" flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                </div>
            </div>)
        }
        </div>

    );
};

export default VerifyDoc;
