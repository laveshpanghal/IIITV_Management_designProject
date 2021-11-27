
import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../Context/AppContext"



const FetchstudentSearch = ({onClick,onChange}) => {

    const [events, setEvents] = useState(null);
    const firestoreDb = firebase.firestore()
    const history = useHistory();









    return (<div className='pt-12'>


            <div className=" bg-gray-100 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-gray-100">
                    Student Fetch
                </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full space-y-6">
                            <div className="w-full">
                                <div className=" relative ">
                                    <input type="number" id="roll" onChange={onChange}
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           placeholder="Student Roll Number"/>
                                </div>
                            </div>



                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" onClick={()=>{onClick()}}
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


    );
};

export default FetchstudentSearch;
















