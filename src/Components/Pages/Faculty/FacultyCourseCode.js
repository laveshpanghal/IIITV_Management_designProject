import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";

const FacultyCourseCode = ({}) => {

    const [events, setEvents] = useState({});
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


        firestoreDb.collection('Faculty').where("Status","==","Approved").where("Role","==","Course faculty").get().then((doc) => {

                setEvents(doc.docs);
                console.log(doc, "res")

            })
                .catch((err) => {
                    throw err
                });


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
                                Faculty Course Code List
                            </h3>
                        </div>
                    </div>
                    {events.map((value) => {
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
                                                        Faculty Name
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Course Codes
                                                    </th>
                                                    <th scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Add Course Codes
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {value.data().Name}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {
                                                                        ((value.data().CourseCode) ? (
                                                                            <div>{value.data().CourseCode}</div>
                                                                            ):( <div>No Courses</div>))


                                                                    }
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                <span
                    onClick={()=>{

                        {history.push(`/FacultyCourseCode/${value.data().Name}`)}}}
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 cursor-pointer">
                  Add
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

export default FacultyCourseCode;
