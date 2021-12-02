import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
    ;
import firebase from "firebase/compat";



const AddAcademicCalender = ({}) => {
    const fileInput = React.createRef();
    const {id} = useParams();
    const history = useHistory()
    const[events,setEvents] =  useState(null)
    const num = Math.floor(Math.random() * 1000) + 1;
    const firestoreDb = firebase.firestore()
    const[isNotloading,setIsNotloading ] =useState(true)
    const[userid,setUserid]=useState()
    const [data, setData] = useState(
        {
            name: "404",
        }
    )



    function onChange(e) {
        e.persist();
        setData(() => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }
    const initialdocs = []

    function removeDocObj(id) {
        initialdocs.forEach((doc) => {
            if (doc.name === id) {
                // console.log(doc)
                // console.log(initialdocs.indexOf(doc))
                initialdocs.splice(initialdocs.indexOf(doc), 1)
            }


        })

    }



    function onDocsChange(e) {
        e.persist();
        removeDocObj(e.target.id)



        if ( fileInput.current.files[0].name.split('.').pop() !== 'pdf' && fileInput.current.files[0].name.split('.').pop() !== 'PDF'){
            alert("File format must be pdf");
            e.target.value = null;
            return;
        }

        initialdocs.push(
            {
                "name": e.target.id,
                "file": fileInput.current.files[0]
            })

        console.log(initialdocs,initialdocs.file)


    }

    const storage = getStorage();




    const upload = async (e) => {
        e.preventDefault()


        var gg = document.getElementById('projectImage').value;


        if(gg===""||gg===undefined||gg===null){



            alert('Upload Academic Calender PDF')
            console.log(initialdocs.length,initialdocs)
            return
        }
        if(data.name==='404'|| data.name===""|| data.name===undefined||data.name===null){

            alert('Academic calender name cant be empty')
            return
        }





        try {

            const storageRef = ref(storage, "/AcademicCalender/"+data.name+".pdf")
            const uploadTask = uploadBytesResumable(storageRef, fileInput.current.files[0])



            await    uploadTask.on('state_changed',
                (snapshot) => {
                    setIsNotloading(false)
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running',);
                            break;
                    }
                },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        console.log('File available at',downloadURL);

                        const datais= {
                            "documentName" : data.name,
                            "downloadURL":downloadURL,
                        }
                        console.log(datais)

                            firestoreDb.collection('AcademicCalender').doc(data.name).set({
                                "downloadUrl" : datais.downloadURL,
                                "academicCalenderName":data.name


                            }).then(()=>{
                                alert("Academic Calender uploaded")
                                history.goBack()
                            })



                    });
                },

            );






            setTimeout(() => {
                history.push('/')

            }, 4870)



        }
        catch (err){
            console.log(err)
        }




    }


    return (
        <div>
            <div className='flex justify-end pt-12 pr-12'>  <div className='btn btn-secondary w-20 '  onClick={(e)=>{history.goBack()}}>Back</div></div>



            <div className=" items-center justify-center px-5 py-8 lg:px-20" hidden={!isNotloading}>
                <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transhtmlForm bg-white border rounded-lg lg:w-1/2 ">
                    <section className="flex flex-col w-full h-full p-1 overflow-auto">
                        <label htmlFor="name" className="text-base leading-7 text-blueGray-500 mb-5">Academic Calender</label>

                        <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
                            <input type="file"  className=' flex-auto items-center text-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transhtmlForm bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2'  accept='application/pdf,' id="projectImage" onChange={onDocsChange}  ref={fileInput} required/>

                        </p>

                    </section>
                    <div className="relative pt-4">
                        <label  htmlFor="name" className="text-base leading-7 text-blueGray-500">Academic Calender Name (Autumn/Winter-Year)</label>
                        <input type="text" id="name" name="name" placeholder="Academic Calender name" onChange={onChange} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transhtmlForm rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"/>
                    </div>

                    <div className="flex items-center w-full pt-4 mb-4">
                        <button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transhtmlForm bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 " onClick={(e)=>{upload(e).then()}}
                        > Add Academic Calender </button>
                    </div>

                    <hr className="my-4 border-gray-200"/>


                </form>
            </div>


            <div hidden={isNotloading} className="flex h-screen -mt-20 justify-center items-center">
                <div className="w-8 lg:w-12 h-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="animate-ping"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                </div>
            </div>


        </div>




    );
};







export default AddAcademicCalender;



