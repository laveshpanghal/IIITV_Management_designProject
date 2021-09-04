import React, {useState} from "react";
import "../Styles/Admindash.css"
import {child, get,ref,onChildAdded, onChildChanged, onChildRemoved} from "firebase/database";
import realDb from "../../../index";
import {useParams, useHistory} from "react-router-dom";

const AdmissionReq=()=> {
    const {id} = useParams();
    const reqElement = {

        Name:"",
        RollNo:"",
        DoP:"",


    }

    function addReqElement(data){

        if(data.child("Status").equals("Pending")){


        }


    }

    const commentsRef = ref(realDb, "AdmissionForms/2021/" );
    onChildAdded(commentsRef, (data) => {
        addReqElement( data.key, data.val().text, data.val().author);
    });

    onChildChanged(commentsRef, (data) => {

    });

    onChildRemoved(commentsRef, (data) => {

    });


        return (
            <div></div>
        )
    }

    export default AdmissionReq;