import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import GradeMaster from "./GradeMaster";

const FacultyDash = () => {
    const firestoreDb = firebase.firestore()
    const[role,setRole] = useState();
    const[events,setEvents]=useState();

    const data = ()=>{

        firestoreDb.collection('Faculty').where("FacultyId",'==',firebase.auth().currentUser.uid).get().then((doc)=>{
        setEvents(doc.docs[0].data())
        setRole(doc.docs[0].data().Role)
        })
    }
    useEffect(()=>{data()},[])


    return (
        <div className="container"
        >
            {
                ((role==='Grade Master')?(<div>
                    <GradeMaster events={events}/>

                </div>):(<div></div>))


            }
        </div>
    );
};

export default FacultyDash;
