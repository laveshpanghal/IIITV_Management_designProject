import React, {useEffect, useState} from 'react';
import firebase from "firebase/compat";
import ViewGradeCard from "../../Reusable/ViewGradeCard";
import ViewAllGradeCards from "../../Reusable/ViewAllGradeCards";
import {useHistory} from "react-router-dom";

const GradeCardViewStudent = () => {
    const firestoreDb = firebase.firestore()
    const[hidden,setHidden] = useState(true);


    const history = useHistory();


    return (
        <div className="container "
        >
            <div className="flex justify-between">
                <button className=' w-1/4 hover:bg-gray-200 rounded' onClick={()=>{history.push('/studentDashBoard')}}>
                    Back to DashBoard
                </button>
                <button className=' w-1/4 hover:bg-gray-200 rounded' onClick={()=>{setHidden(!hidden)}}>
                    {hidden ? ('view all grade cards'):('view table form')}
                </button>
            </div>
            <div hidden={hidden}>
                <ViewAllGradeCards/>
            </div>
            <div hidden={!hidden}>
                <ViewGradeCard/>
            </div>
        </div>
    );
};

export default GradeCardViewStudent;
