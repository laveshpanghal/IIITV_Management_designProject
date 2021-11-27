import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import GradeMaster from "./GradeMaster";
import ViewGradeCard from "../../Reusable/ViewGradeCard";

const GradeCardVeiwMaster = () => {
    const firestoreDb = firebase.firestore()
    const[role,setRole] = useState();
    const[events,setEvents]=useState();




    return (
        <div className="container"
        >
            <div>
                <button>
                    view all grade cards
                </button>
            </div>
            <div>
                <ViewGradeCard/>
            </div>
        </div>
    );
};

export default GradeCardVeiwMaster;
