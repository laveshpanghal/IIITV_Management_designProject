
import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import {getAuth} from "firebase/auth";
import img from '../../../wallpaperbetter.com_1920x1200.jpg'

const FacultyRedirect = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState('uploaded for verification ');
    const [temp1, setTemp1] = useState('not-uploaded yet')
    const firestoreDb = firebase.firestore()
    const{rollNo}= useApp();

    const history = useHistory();


    const auth = getAuth();

    function fetchEvents() {


        firestoreDb.collection("Faculty").where("FacultyId","==",auth.currentUser.uid).get().then((res) => {
            console.log(res.docs[0].data(),"jj")
            setEvents(res.docs[0]);

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

                        <div className="bg-indigo-900 relative overflow-hidden h-screen">
                            <img src={img} className="absolute h-full w-full object-cover"/>
                            <div className="inset-0 bg-black opacity-25 absolute">
                            </div>
                            <div
                                className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                                <div className="w-full font-mono flex flex-col items-center relative z-10">
                                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                                        {events.data().Status==="pending"?('Your Request Is under Review'):(events.data().Status==="Approved" ? ('Request Approved'):('Request Has been Denied Please Contact Admin')) }
                                    </h1>
                                    <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                                        {events.data().Status==="pending"?(<button
                                            className="p-2 pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg rounded-lg hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-yellow-300" onClick={()=>{history.push('/')}}>Go Back</button>):(events.data().Status==="Approved" ? (
                                            <button
                                                className="p-2 pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg rounded-lg hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-yellow-300" onClick={()=>{history.push('/FacultyDash')}}>Faculty Dashboard</button>):(
                                            <button
                                                className="p-2 pl-5 pr-5 bg-transparent border-2 border-yellow-500 text-yellow-500 text-lg rounded-lg hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-yellow-300" onClick={()=>{history.push('/')}}>Go Back</button>)) }
                                    </p>
                                </div>
                            </div>
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

export default FacultyRedirect;
















