
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import FetchstudentSearch from "../../Reusable/FetchstudentSearch";

const GradeMasterStudentFetch = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState('uploaded for verification ');
    const [temp1, setTemp1] = useState('not-uploaded yet')
    const firestoreDb = firebase.firestore()

    const history = useHistory();
    const[roll,setRoll]=useState()





    function onChange(e) {
        e.persist();
        setRoll(e.target.value)
    }

    function fetchEvents() {
        console.log(roll)

        firestoreDb.collection("Students2021").where("AdmissionFormId","==",roll).get().then((res) => {
            console.log(res)
            setEvents(res.docs[0]);

        })
            .catch((err) => {
                throw err
            });

        console.log(events, "ok")

    }






    return (<div>


            {events ? (
                    <div>

                        <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                GradeMaster Dashboard
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                                student search
                            </p>
                        </div>
                        <div className="container flex  flex-row ... mx-auto w-full items-center justify-center mt-12">
                            <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  mt-0  ">


                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Name:
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.data().Name}
                                            </dd>
                                        </div>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Roll No :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {roll}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Degree :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.data().Course? events.data().Course : "Fill Admission Form"}
                                            </dd>
                                        </div>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Branch :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.data().Branch? events.data().Branch : "Fill Admission Form"}
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
                                               Add Grades
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                              present and previous grades
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                         add
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {

                                            (history.push(`/AddGradeCard/${roll}`))

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
                                                View uploaded grade cards
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                grade cards
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            View
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {

                                            // (history.push('/'))

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




                            </ul>
                        </div>
                    </div>
                )
                : (

                    <div>

                       <FetchstudentSearch onChange={onChange} onClick={fetchEvents}/>
                    </div>)

            }

        </div>


    );
};

export default GradeMasterStudentFetch;
















