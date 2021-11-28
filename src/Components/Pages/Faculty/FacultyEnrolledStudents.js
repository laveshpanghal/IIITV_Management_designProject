import React, {useEffect, useState} from "react";
import firestoreDb from "../Pages";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const FacultyEnrolledStudents = ({}) => {

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
                        <div className="px-4 py-4 sm:px-6 d-flex justify-content-between ">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Grade Cards
                            </h3>
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
                                                        Grade Card Name
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        View
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {value.data().gradecardName}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                <span
                    onClick={()=>{

                        {history.push(`/FacultyEnrolledStudents/${id}/${value.data().gradecardName}`)}}}
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 cursor-pointer">
                  View
                </span>
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
                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyEnrolledStudents;
