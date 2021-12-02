
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import alertImage from "../../../caution.png"

const StudentDashBoard = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState(null);
    const [temp1, setTemp1] = useState('not-uploaded yet')
    const firestoreDb = firebase.firestore()
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();


    function fetchEvents() {

        console.log(firebase.auth().currentUser.email)
        firestoreDb.collection("Students2021").where("Email", "==", firebase.auth().currentUser.email).get().then((res) => {
            console.log(res)
            setEvents(res.docs[0]);
            setTemp(res.docs[0].data().Courses)


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


    const handelDelete = ()=>{

        firestoreDb.collection("Students2021").where("Email", "==", firebase.auth().currentUser.email).get().then((res) => {
            firestoreDb.collection('Students2021').doc(res.docs[0].id).update({
                "alert":""
            }).then(()=>{
                alert('alert Deleted')
                setShowModal(false)
                window.location.reload()
            })

        })
            .catch((err) => {
                throw err
            });


    }


    return (<div>


            {events ? (
                    <div>
                        <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                Student Dashboard
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                                {events.data().Name}
                            </p>
                        </div>


                        <div className="container flex  flex-row ... mx-auto w-full items-center justify-center mt-12">
                            <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  mt-0  ">

                                <div className='flex flex-column'>
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div
                                                className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Roll No :
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {events.data().AdmissionFormId ? (events.data().AdmissionFormId) : ('please verify your roll No ')}
                                                </dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Degree :
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {events.data().Course ? events.data().Course : "Fill Admission Form"}
                                                </dd>
                                            </div>
                                            <div
                                                className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Branch :
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {events.data().Branch ? events.data().Branch : "Fill Admission Form"}
                                                </dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    My Courses :
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {events.data().enrolledCourses ? ('View')
                                                        : ("Not-filled")
                                                    }
                                                </dd>
                                            </div>

                                        </dl>

                                    </div>
                                    <div className='pt-12 animate-bounce ' hidden={!events.data().alert}>
                                        <li className="  border-gray-400 flex flex-row mb-2" onClick={() => {
                                            setShowModal(true)

                                        }}>
                                            <div
                                                className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-purple-100 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                    <img src={alertImage} alt='alert by Smashicons'/>
                                                </div>
                                                <div className="flex-1 pl-1 md:mr-16">
                                                    <div className="font-medium dark:text-white">
                                                        ALERT
                                                    </div>
                                                    <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                        {events.data().alert}
                                                    </div>
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-200 text-xs">
                                                    View
                                                </div>
                                                <span className="w-24 text-right flex justify-end" >
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
                                    </div>
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
                                                Enroll For Courses
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">

                                                {events.data().enrolledCourses ? "Completed" : "Fill Now"}
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            Deadline Time
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={() => {

                                            (!(events.data().Courses)) ? history.push(`/CourseReq/${events.data().AdmissionFormId}`):(alert('form already submitted') )
                                            // history.push(`/CourseReq/${events.data().AdmissionFormId}`)
                                            console.log(events.data().Courses)
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
                                                Academic Calender
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                Sem Name
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            View
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={() => {

                                            (history.push('/Student/AcademicCalenderViewStudent'))


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
                                                Manage fee related queries
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            View
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={() => {

                                            (history.push('/Fees'))

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
                                                View Grades
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                View Your Grade cards
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            View
                                        </div>
                                        <span className="w-24 text-right flex justify-end" onClick={() => {

                                            (history.push(`/Student/ViewGradeCard/${events.data().AdmissionFormId}`))

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






                        {showModal ? (
                            <>
                                <div
                                    className=" w-2/4 left-1/4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">

                                        <div
                                            className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                            <div className="px-4 py-8 sm:px-10">
                                                <div className="relative mt-6">
                                                    <div className="absolute inset-0 flex items-center">
                                                        <div className="w-full border-t border-gray-300">
                                                        </div>
                                                    </div>
                                                    <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-white">
                    Alert Details
                </span>
                                                    </div>
                                                </div>
                                                <div className="mt-6">
                                                    <div className="w-full space-y-6">
                                                        <div className="w-full">
                                                            <div className=" relative ">
                                                                ALERT:
                                                                <hr/>
                                                                <p>
                                                                    {events.data().alert}
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-row... justify-between'>

                                                <div className="p-2 md:w-40 " onClick={() => {handelDelete(events)}}>
                                                    <div
                                                        className="flex  items-center p-2 bg-red-200 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">

                                                        <div className='text-center' >
                                                            <p className=" text-xs  font-medium ml-2 pl-6  ">
                                                                DELETE
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-2 md:w-40 ">
                                                    <div
                                                        className="flex items-center p-2 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100"


                                                    >

                                                        <div onClick={()=>{setShowModal(false)}}>
                                                            <p className=" text-xs font-medium ml-2 pl-4 ">
                                                                KEEP
                                                            </p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}








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

export default StudentDashBoard;
















