
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";

const FacultyMaster = ({events}) => {

    const [temp, setTemp] = useState('uploaded for verification ');
    const [temp1, setTemp1] = useState('not-uploaded yet')
    const firestoreDb = firebase.firestore()
    const{rollNo}= useApp();

    const history = useHistory();

    return (<div>


            {events ? (
                    <div>

                        <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                Faculty Dashboard
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                                {events.Name}
                            </p>
                        </div>
                        <div className="container flex  flex-row ... mx-auto w-full items-center justify-center mt-12">
                            <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  mt-0  ">


                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Name :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.Name?(events.Name):('404')}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Role :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.Role?(events.Role):('404')}
                                            </dd>
                                        </div>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Email :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.Email? events.Email : "404"}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Institute :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                IIIT,Vadodara
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
                                                Assign Course Code to faculties
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Fetch list
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                          Assign Course code
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {


                                            (history.push('/FacultyCourseCode'))

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
                                                Approve Articles
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Faculty articles
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            view
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {
                                            alert('push to Course desc upload')

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
                                <li className="border-gray-400 flex flex-row mb-2">
                                    <div
                                        className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">

                                        </div>
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Send alert to a student
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                send alerts to student dashboard
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            add alert
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={() => {
                                            history.push('/AddAlert')
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
                                                Article
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                compose an article
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            visible on article feed
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {


                                            (history.push('/AddArticle'))

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

export default FacultyMaster;
















