import React, {useEffect, useState} from "react";
import firebase from "firebase/compat";
import {useParams, useHistory,useLocation} from "react-router-dom";
import Select from 'react-select'

const FacultyCourseCode = ({}) => {

    const [events, setEvents] = useState(null);
    const [choices, setChoices] = useState(null);
    const [temp, setTemp] = useState();
    const firestoreDb = firebase.firestore()
    const {facultyName} = useParams();
    const history = useHistory();
     var  options=[]
    var choice = []






// const handleVerify = ()=>{
//
//
//     const convertArrayToObject = (array, key) =>
//         array.reduce(
//             (obj, item) => ({
//                 ...obj,
//                 [item[key]]: item
//             }),
//             {}
//         );
//
//     const document = convertArrayToObject(temp,temp.documentName)
//
//     firestoreDb.collection("AdmissionForms2021").doc(id).update({document
//     }).then()
// }




    function fetchEvents() {


        firestoreDb.collection('Courses').get().then((doc) => {

            setEvents(doc.docs);

            doc.docs.map((value,key)=>{

                const obj = {

                    "value":value.id,
                    label:value.id
                }

               options.push(obj)
                console.log(options)
            })

            setTemp(options)

            console.log(doc.docs,"aaa")
        })
            .catch((err) => {
                throw err
            });


    }

    useEffect(() => {
        fetchEvents();
        console.log(events,"3")
    }, []);












// if(temp!==null){
//
//     handleVerify()
//
// }

const onChooseButton=()=>{

    events.map((value,key)=>{
        const aa=value.value

        choice.push(aa)

        firestoreDb.collection('Faculty').where("Name","==",facultyName).get().then((doc)=>{

            firestoreDb.collection('Faculty').doc(doc.docs[0].id).update({
                "CourseCode":choice
            }).then(()=>{

                history.goBack()
            })
        })

    })
    console.log(choice)
}


const handleChange=(e)=>{
    setEvents(e)
}

    return (
        <div className="container  sm:mt-20 flex justify-content-center">

            { events && events.length ? (

                <div className="shadow-lg  rounded-2xl w-1/2 h-full bg-white dark:bg-gray-800 p-4">
                    <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                        {facultyName}
                    </p>

                    <p className="text-gray-600 dark:text-gray-100 pb-4 text-xs mt-4">
                        Select from following Courses
                    </p>
                    <Select id='selectID'
                        defaultValue={''}
                        isMulti
                        onChange={handleChange}
                        name="colors"
                        options={temp}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />

                    <button type="button" onClick={()=>{onChooseButton()}}
                            className= "py-2 px-4 mt-12 bg-gray-300  hover:bg-gray-800 hover:text-gray-400  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black  w-full transition ease-in duration-200 text-center  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Choose Courses
                    </button>
                </div>

            ) : (
                <div>
                    <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyCourseCode;
