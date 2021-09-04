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
        Dop:"",
        Degree:"",


    }

    function addReqElement(data){

        if(data.child("Status").equals("Pending")){
            reqElement.Name= data.child("data/name").value
            reqElement.RollNo= data.child("data/entranceExamRollNo").value
            reqElement.Dop= data.child("FeesData/dop").value
            reqElement.Degree= data.child("data/").value





        }


    }

    const commentsRef = ref(realDb, "AdmissionForms/2021/" );
    onChildAdded(commentsRef, (data) => {
        addReqElement( data);
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