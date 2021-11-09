
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";

const StudentAdmissionDashboard = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState('uploaded for verification ');
    const [temp1, setTemp1] = useState('not-uploaded yet')
    const firestoreDb = firebase.firestore()
    const{rollNo}= useApp();
    const history = useHistory();




     function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(rollNo).get().then((res) => {
            setEvents(res.data());

            firestoreDb.collection("AdmissionForms2021").doc(rollNo).collection("Documents").get().then(

                (res)=>{
                    console.log(res)
                    if(!res.empty){
                        setTemp1('uploaded')
                    }
                }
            )



            firestoreDb.collection("AdmissionForms2021").doc(rollNo).collection("Documents").where("verified","==",true).get().then(
                (res)=>{
                    if(res.docs.length===13){

                        setTemp('Verified')

                    }

                }
            )

        })
            .catch((err) => {
                throw err
            });

        console.log(events, "ok")

    }






    useEffect(() => {
        fetchEvents();
        console.log(events, "3")
    }, []);


    return (<div>


            {events ? (
                    <div>

                        <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                Admission Dashboard
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                                {firebase.auth().currentUser.displayName}
                            </p>
                        </div>
                        <div className="container flex  flex-row ... mx-auto w-full items-center justify-center mt-12">
                            <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  mt-0  ">


                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Roll No :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {rollNo==='404'? ('please verify your roll No '):(rollNo)}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Degree :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.Course? events.Course : "Fill Admission Form"}
                                            </dd>
                                        </div>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Document Status :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {temp1 ==='uploaded' ? ( temp)
                                                    : (temp1)
                                                }
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Fees Status :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                { events.feesData ? ( events.feesData.verified ? "Verified" : "details uploaded for verification")
                                                    : ("Not-filled")
                                                }
                                            </dd>
                                        </div>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Enrollment Status :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.status}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>


                            <ul className="flex flex-col ml-12">
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div
                                        className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                        </div>
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Admission Form
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">

                                                {events.data? "Completed" : "Fill Now" }
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            Deadline Time
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {

                                            events.data?(alert('form already submitted')):(history.push('/AdmissionForm'))

                                        }}>
                                <svg width="12" fill="currentColor" height="12"
                                     className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </span>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div
                                        className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">

                                        </div>
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Documents upload
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                {temp1==='uploaded'? "Uploaded" : "Upload Now" }
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            Deadline Time
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {

                                            temp1==='uploaded'?(alert('Documents already uploaded')):(history.push('/AdmissionDocumentUpload'))

                                        }}>
                                <svg width="12" fill="currentColor" height="12"
                                     className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </span>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div
                                        className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">

                                        </div>
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Fee Details
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                { events.feesData ? ( events.feesData.verified ? "Verified" : "Details uploaded ")
                                                    : ("Upload details")
                                                }
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            Deadline Time
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={() => {

                                            events.feesData?(alert('Details already uploaded')):(history.push('/AdmissionFees'))

                                        }}>
                                <svg width="12" fill="currentColor" height="12"
                                     className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </span>
                                    </div>
                                </li>
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div
                                        className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">

                                        </div>
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Make Changes
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                change uploaded documents or details
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            until permitted
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={()=>(
                                            history.push('/StudentAdmissionDashboard/makeChanges')
                                        )}>
                                <svg width="12" fill="currentColor" height="12"
                                     className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
                : (

                    <div>

                        <div className=" flex justify-center items-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                        </div>
                    </div>)

            }

        </div>


    );
};

export default StudentAdmissionDashboard;
















