
import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../Context/AppContext"



const AddAlert = () => {


    const [events, setEvents] = useState(null);
    const [hidden, setHidden] = useState(true);
    const firestoreDb = firebase.firestore()
    const history = useHistory();

const handelAlert=()=>{
    var alert = document.getElementById('alert').value
if(hidden===true){

    firestoreDb.collection('Students2021').get().then((res)=>{
        console.log(res,'check1')

        res.docs.map((value,key)=>{
            console.log(value.id)

            firestoreDb.collection('Students2021').doc(value.id).update({
                "alert": alert
            }).then(()=>{})

        })

    })


}



    }




    return (<div className='pt-12'>





            <div className=" bg-gray-100 rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">



                    <div className="flex items-center gap-8 ">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" onChange={()=>setHidden(true)}/>
                            <span className="ml-2 text-gray-700">
                To All Students
            </span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="radio" name="vehicle" className="h-5 w-5 text-red-600" onChange={()=>setHidden(false)}/>
                            <span className="ml-2 text-gray-700">
                    To Specific Student
                </span>
                        </label>
                    </div>



                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">

                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-gray-100">
                    Student Alert
                </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full space-y-6">

                            <div className="w-full" hidden={hidden}>
                                <div className=" relative ">
                                    <input type="number" id="roll"
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           placeholder="Student Roll Number"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <input type="text" id="alert"
                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                           placeholder="Alert"/>
                                </div>
                            </div>




                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" onClick={()=>{handelAlert()}}
                                            className="py-2 px-4  bg-gray-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Send Alert
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

export default AddAlert;
















