import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';

const FinalAdmissionStatus = ({}) => {

    init("user_otDdHz3eX5AgBgHWoJGgb");

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState('some docs not-verified');
    const firestoreDb = firebase.firestore()
    const {id} = useParams();
    const history = useHistory();




    function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(id).get().then((res) => {
            setEvents(res.data());

            firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").where("verified","==",true).get().then(
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

    function sendEmail(fromName,toName,toEmail,email){

        let message = "Your student portal email is "+toEmail+"\n Now you can register and login into student portal from \n https://iiitv-198b6.web.app/StudentLogin";

        const templateParams = {
            from_name: fromName,
            to_name: toName,
            message: message,
            reply_to: email
        };
        emailjs.send('service_ygp44qj', 'template_qu85eds', templateParams, "user_otDdHz3eX5AgBgHWoJGgb")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });


    }

    const handleVerify = ()=>{
        console.log(id)
        firestoreDb.collection("AdmissionForms2021").doc(id).update({
            "status":"accepted"

        }).then(


            (res)=>{

                firestoreDb.collection('Students2021').doc().set({   "Name":events.data.name,
                    "Course":events.Course,
                    "Branch":events.data.branch,
                    "AdmissionFormId":id,
                    "Email":id+"."+(events.data.name.replace(/\s/g, "")).toLowerCase()+"@iiitvadodara.ac.in"}).then(()=>{
                    sendEmail("IIIT Vadodara",events.data.name,id+"."+(events.data.name.replace(/\s/g, "",)).toLowerCase()+"@iiitvadodara.ac.in",events.data.emailAddress);
                        history.push(`/Admin/EnrollStatus/${id}`)})



            }
        )
    }

    const handleReject = ()=>{
        firestoreDb.collection("AdmissionForms2021").doc(id).update({
            "status":"rejected"

        }).then(
            (res)=>{
                history.push(`/Admin/EnrollStatus/${id}`)
            }
        )
    }




    useEffect(() => {
        fetchEvents();
        console.log(events, "3")
    }, []);


    return (<div>
            <div className="flex justify-between pl-2 ">
                <button  onClick={(e)=>{history.push(`/Admin/VerifyFees/${id}`)}}
                    className="w-44 h-12 px-6 py-2 font-semibold select-none rounded-md text-white bg-gray-900 hover:bg-gray-800">Back
                </button>
            </div>
            {events ? (
                    <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  m-auto mt-16  ">
                        <div className="px-4 py-5 sm:px-6" text-center>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Student Final Status
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Final Admission Status of Student.
                            </p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Full name
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.data.name}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Roll No
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {id}
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Degree
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.Course}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Document Status
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {temp}
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Fees Status
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.feesData.verified? "verified":"not-verified"}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>


                )
                : (<div>

                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                    </div>
                </div>)
            }
            {temp==="Verified"&&events.feesData.verified ?(

                <div className="flex justify-center pt-6 ">
                    <button onClick={handleVerify}
                            className="p-2  w-44 pl-5 pr-5 bg-transparent border-2 border-purple-400 text-grey-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Enroll Student
                    </button>
                    <button onClick={handleReject}
                            className="p-2 w-44 ml-2 mr-6 pl-5 pr-5 bg-transparent border-2 border-purple-400 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300">Reject
                    </button>

                </div>)
                :
                (
                    <div className="flex justify-center pt-6 ">
                        <button disabled onClick={handleVerify}
                                className="px-4 py-2 w-44 rounded-md cursor-default text-sm font-medium focus:outline-none focus:ring transition text-white bg-green-300 focus:ring-green-200">Can't Verify
                        </button>
                        <button onClick={handleReject}
                                className="p-2 w-44 ml-2 mr-6 pl-5 pr-5 bg-transparent border-2 border-purple-400 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300">Reject
                        </button>

                    </div>



                )



            }



        </div>


    );
};

export default FinalAdmissionStatus;
