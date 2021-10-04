import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const VerifyDoc = ({}) => {

    const [events, setEvents] = useState(null);
    const firestoreDb = firebase.firestore()
    const {id} = useParams();
    const history = useHistory();

// const handleVerify = ()=>{
//
//     firestoreDb.collection("AdmissionForms2021").doc(id).update(
//         {
//             "docu"
//
//         }
//     )
// }




    function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(id).get().then((res) => {
            setEvents(res.data().documents);

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
                                                                    {value.documentName}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    ---------------------------------
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{value.verified? "Verified": "Not-Verified"}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  View
                </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" onClick={()=>{
                                                    }}>
                                                        {value.verified? "Reject": "Verify"}
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
                <div>
                    No Events
                </div>
            )}
        </div>
    );
};

export default VerifyDoc;
