import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const VerifyDoc = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState();
    const firestoreDb = firebase.firestore()
    const {id} = useParams();
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

        firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").get().then((res) => {
            setEvents(res.docs);

            // setTemp(res.data().documents)

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
    }, [temp]);



    const handelVerify = (value)=>{

        if(value.data().verified===false){
            firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").doc(value.data().documentName).update({
                "verified":true

            }).then(
                (res)=>{
                    window.location.reload()
                    setTemp(false)

                    console.log(res)

                }
            )



        }

        else{
            firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").doc(value.data().documentName).update({
                "verified":false

            }).then(
                (res)=>{
                    window.location.reload()

                    console.log(res)

                }
            )

        }





    }


// if(temp!==null){
//
//     handleVerify()
//
// }



    return (
        <div className="container mx-auto sm:mt-20">

            { events && events.length ? (
                <div className="mx-auto">
                    <div className="text-center justify-around pb-5">
                        <h2>View all documents at once</h2>
                        <button onClick={()=>{history.push(`/Admin/VerifyDoc/${id}/docs/verify`)}}
                                className="p-2 pl-5 pr-5 w-48 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">view All
                        </button>
                        <div className="px-4 py-4 sm:px-6 d-flex justify-content-between ">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                               Document Verification
                            </h3>
                            <span className='btn btn-secondary w-20 '  onClick={(e)=>{history.push(`/Admin/VerifyFees/${id}`)}}>next</span>
                        </div>
                    </div>
                    {events.map((value, key) => {
                        return (
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Document Name
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Verification Status
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        View
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Verify
                                                    </th>

                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {value.data().documentName}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    ---------------------------------
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{value.data().verified? "Verified": "Not-Verified"}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                <span
                    onClick={()=>{

                       {history.push(`/Admin/VerifyDoc/${id}/${value.data().documentName}`)}}}
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 cursor-pointer">
                  View
                </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer" onClick={
                                                        ()=>{handelVerify(value)}}>
                                                        {value.data().verified? "Reject": "Verify"}


                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
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

export default VerifyDoc;
