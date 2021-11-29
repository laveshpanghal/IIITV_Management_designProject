
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import FetchstudentSearch from "../../Reusable/FetchstudentSearch";
import axios from "axios";
import Adminavtar from "../../../profile-user.png";

const CitationSearch = ({}) => {
    const [showModal, setShowModal] = useState(false);

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState(0);
    const [temp1, setTemp1] = useState(null)
    const firestoreDb = firebase.firestore()
   
    const history = useHistory();
    const[roll,setRoll]=useState()





    function onChange(e) {
        e.persist();
        setRoll(e.target.value)
    }

    function fetchEvents() {

        console.log(roll)
        axios(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_scholar_author&author_id=${roll}&api_key=a89175a71107099a4e42dc6c42323f904a86cd860caa81ad816bbf97f7df4a04`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            params:{}
        }).then(response => {
            setEvents(response.data.author)
            setTemp(response.data)




            console.log(temp)
            
            
            console.log(response.data)
        })


    }


    return (<div>


            {events ? (
                    <div>

                        <div className="px-4 flex flex-row justify-between py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                            <div>  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                Google Scholar Search
                            </h3></div>
                            <div> <span className='btn btn-secondary w-20 '  onClick={(e)=>{setEvents(null)}}>Back</span>
                            </div>

                        </div>
                        <div className="container flex  flex-row ... mx-auto w-full items-center justify-center mt-12">
                            <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  mt-0  ">
                                <img className="mx-auto my-2 rounded-full h-24 w-24" src={events.thumbnail} alt="" />

                                <div className="border-t border-gray-200">
                                    <dl>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Name:
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.name}
                                            </dd>
                                        </div>
                                        <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Affiliation :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.affiliations}
                                            </dd>
                                        </div>
                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                interest :
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {events.interests[0].title}
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
                                                Articles Published
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                articles  by {events.name}
                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            view
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {

                                            (history.push(`/CitationSearch/PublishedList/${roll}`))

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
                                                Citations
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">

                                            </div>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                                            View
                                        </div>
                                        <span className="w-24 text-right flex justify-end"  onClick={() => {

                                            setShowModal(true)

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
                                                                Citations:
                                                                <hr/>
                                                                <p>
                                                                    {temp.cited_by.graph.map((e)=>{return(

                                                                        <div className=" rounded bg-purple-100 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                            <dt className="text-sm font-medium text-gray-500">
                                                                                year:{e.year}
                                                                            </dt>
                                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                                {e.citations}
                                                                            </dd>
                                                                        </div>
                                                                    )



                                                                    })}
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-row... justify-between'>

                                                <div className="p-2 md:w-40 " onClick={() => {setShowModal(false)}}>
                                                    <div
                                                        className="flex items-center p-2 bg-green-200 rounded-lg shadow-xs cursor-pointer hover:bg-green-500 hover:text-gray-100"


                                                    >

                                                        <div >
                                                            <p className=" text-xs font-medium ml-2 pl-4 ">
                                                                Back
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

                    <div>

                        <div className='pt-12'>


                            <div className=" bg-gray-100 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                <div className="px-4 py-8 sm:px-10">
                                    <div className="relative mt-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300">
                                            </div>
                                        </div>
                                        <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-gray-100">
                    Google Scholar Search
                </span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="w-full space-y-6">
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <input type="text" id="roll" onChange={onChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="Author Id (Case sensitive)"/>
                                                </div>
                                            </div>



                                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" onClick={()=>{fetchEvents()}}
                                            className="py-2 px-4  bg-gray-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Search
                                    </button>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>)

            }

        </div>


    );
};

export default CitationSearch;





































