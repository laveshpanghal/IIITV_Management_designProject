import React, {useEffect, useState} from "react";
import "../Styles/Admindash.css"
import {child, get,ref,onChildAdded, onChildChanged, onChildRemoved,onValue} from "firebase/database";
import realDb from "../../../index";
import {useParams, useHistory} from "react-router-dom";

const AdmissionReq=()=> {
    const history = useHistory();
    const reqElement = {

        Name:"",
        RollNo:"",
        Dop:"",
        Degree:"",


    }
    function addReqElement(key,data){



        if(data.Status === "Pending"){
            reqElement.Name= data.data.name
            reqElement.RollNo= data.data.entranceExamRollNo
            reqElement.Dop= data.FeesData.dop
            reqElement.Degree= data.Course
            const theDiv = document.getElementById("ggwp");
            theDiv.innerHTML +=  "<br>"+"<br>"+"<div class='d-flex justify-content-between' >"+
                "<p>"+""+"</p>"+
                "<p>"+reqElement.Name+"</p>"
                +"<p>"+reqElement.RollNo+"</p>"
                +"<p>"+reqElement.Dop+"</p>"
                +"<p>"+reqElement.Degree+"</p>"+"<button class='btn btn-secondary' id='handleButton'>Verify</button>"+"<br>"
                +"</div>"
            const button = document.getElementById("handleButton");
            button.addEventListener("click", handleViewButton)
        }

    }

    const handleViewButton=()=>{

        history.push(`/Admin/${reqElement.RollNo}`)

    }

    useEffect(()=>{ const commentsRef = ref(realDb, "AdmissionForms/2021/" );
        onValue(commentsRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                addReqElement(childKey,childData)
                // ...
            });
        }, {
            onlyOnce: true
        });},[])







    // onChildAdded(commentsRef, (data) => {
    //     addReqElement( data.value);
    // });
    //
    // onChildChanged(commentsRef, (data) => {
    //
    // });
    //
    // onChildRemoved(commentsRef, (data) => {
    //
    // });


    return (
        <div id="ggwp"></div>

    )
}

export default AdmissionReq;