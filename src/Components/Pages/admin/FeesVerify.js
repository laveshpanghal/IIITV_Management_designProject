import React, {useEffect, useState} from "react";
import firestoreDb from "../index";
import firebase from "firebase/compat";
import {useParams, useHistory, useLocation} from "react-router-dom";

const FeesVerify = ({}) => {

    const [events, setEvents] = useState(null);
    const [temp, setTemp] = useState();
    const firestoreDb = firebase.firestore()
    const {id} = useParams();
    const history = useHistory();

    const handleAcceptAll = () => {
        events.map((value, key) => {
            firestoreDb.collection("AdmissionForms2021").doc(id).collection("Documents").doc(value.data().documentName).update({
                "verified": true
            }).then(() => {
                history.push(`/Admin/VerifyDoc/${id}`)

            })

        })


    }


    function fetchEvents() {

        firestoreDb.collection("AdmissionForms2021").doc(id).get().then((res) => {
            setEvents(res.data());

            console.log(res, "res")

        })
            .catch((err) => {
                throw err
            });

        console.log(events, "ok")

    }

   const handleVerify = ()=>{
       firestoreDb.collection("AdmissionForms2021").doc(id).update({
           "feesData.verified":true

       }).then(
           (res)=>{
               history.push(`/Admin/FinalVerification/${id}`)
           }
       )
   }

    const handleReject = ()=>{
        firestoreDb.collection("AdmissionForms2021").doc(id).update({
            "feesData.verified":false

        }).then(
            (res)=>{
                history.push(`/Admin/FinalVerification/${id}`)
            }
        )
    }



    useEffect(() => {
        fetchEvents();
        console.log(events, "3")
    }, []);


    return (<div>
            <div className="flex justify-between pl-2 ">
                <button  onClick={(e)=>{history.push(`/Admin/VerifyDoc/${id}`)}}
                    className="w-44 h-12 px-6 py-2 font-semibold select-none rounded-md text-white bg-gray-900 hover:bg-gray-800">Back
                </button>
            </div>
            {events ? (
                    <div className="bg-purple-200 max-w-2xl shadow overflow-hidden sm:rounded-lg  m-auto mt-16  ">
                        <div className="px-4 py-5 sm:px-6" text-center>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Student Fees Details
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Details and informations about Fees paid.
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
                                        Date of Payment
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.feesData.dop}
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Payment No./Ref No.
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.feesData.paymentId}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Payment Type
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.feesData.paymentType}
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Status
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {events.feesData.verified ? "verified" : "not-verified"}
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

            <div className="flex justify-center pt-6 ">
                <button onClick={handleVerify}
                    className="p-2  w-44 pl-5 pr-5 bg-transparent border-2 border-purple-400 text-grey-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Verify
                </button>
                <button onClick={handleReject}
                    className="p-2 w-44 ml-2 mr-6 pl-5 pr-5 bg-transparent border-2 border-purple-400 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300">Reject
                </button>

            </div>


        </div>


    );
};

export default FeesVerify;
