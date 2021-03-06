import React, {useState, useEffect} from "react";
import "../Styles/AdmissionForm.css"
import realDb from "../../../index";
import {set, ref as RefDb} from "firebase/database";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {useHistory} from "react-router-dom";
import {useApp} from "../../../Context/AppContext";
import {child} from "firebase/database";
import firebase from "firebase/compat";

const fileInput = React.createRef();


const AdmissionDocumentUpload = () => {
    const [data,setData]=useState({})
    const firestoreDb = firebase.firestore()

    const{rollNo}= useApp();
    const {renderToastError} = useApp()
    const history = useHistory()
    const handleback = (history) => {
        history("/AdmissionForm")
    }
    const{degree}=useApp();
    const{setDegree}=useApp();
    const [extraFields, setExtraField] = useState(false);
    useEffect(()=>{

        if (degree === "B.Tech") {
            setExtraField(false)
        } else {
            setExtraField(true)
        }

    },[])
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

        if (fileInput.current.files[0].size > 500*1024){
            alert("Pdf size must be less than 500KB and Image size must be less than 50KB.");
            e.target.value = null;
            return;
        }

        //console.log(fileInput.current.files[0].name)
        if (fileInput.current.files[0].name.split('.').pop() !== 'pdf' && fileInput.current.files[0].name.split('.').pop() !== 'PDF' && fileInput.current.files[0].name.split('.').pop() !== 'jpg' && fileInput.current.files[0].name.split('.').pop() !== 'JPG' && fileInput.current.files[0].name.split('.').pop() !== 'jpeg' && fileInput.current.files[0].name.split('.').pop() !== 'JPEG' && fileInput.current.files[0].name.split('.').pop() !== 'png' && fileInput.current.files[0].name.split('.').pop() !== 'PNG'){
            alert("File format must be pdf or png or jpg or jpeg");
            e.target.value = null;
            return;
        }

        initialdocs.push(
            {
                "name": e.target.id,
                "file": fileInput.current.files[0]
            })


        // console.log(initialdocs)

    }

    const storage = getStorage();


    const handleUploadDocsButton = async (e) => {

        if(degree==="B.Tech"){
            if (initialdocs.length !== 13 ){
                {
                    console.log(initialdocs.length)}
                alert("Some of the files were missing.")
                return;
            }
        }

        if(degree==="M.Tech"){

            if (initialdocs.length !== 16 ){
                {
                    console.log(initialdocs.length)}
                alert("Some of the files were missing.")
                return;
            }
        }

        const fileType = (doc)=>{
            console.log(doc.name)

            if(doc.name==='docSelfSignature'||doc.name==='docFathersSignature'||doc.name==='docPassportSizeImage'){
                return '.jpg'

            }
            else {
                return '.pdf'
            }


        }

        e.preventDefault()
        await initialdocs.forEach((doc) => {
            const storageRef = ref(storage, "/AdmissionFormDocs/2021/" +rollNo+"/"+doc.name+ fileType(doc))
            const uploadTask = uploadBytesResumable(storageRef, doc.file)
            console.log(doc.file.type)

            uploadTask.on('state_changed',
                (snapshot) => {
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
                (error) => {

                    // Handle unsuccessful uploads
                },
               () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        console.log('File available at', doc.name,downloadURL);

                        const datais= {
                            "documentName" : doc.name,
                            "downloadURL":downloadURL,
                            "verified":false
                        }
                        console.log(datais)

                        firestoreDb.collection("AdmissionForms2021").doc(rollNo).collection("Documents").doc(doc.name).set({...datais})

                         firestoreDb.collection("AdmissionForms2021").doc(rollNo).update({
                             documents:firebase.firestore.FieldValue.arrayUnion(datais)
                         })
                        // set(RefDb(realDb, "AdmissionForms/2021/"+rollNo+"/documents/" + doc.name), downloadURL).then((history) => {
                        //
                        // })
                    });
                }
            );


        })

        history.push('/AdmissionFees')



    }


    return (
        <div>

            <form action="/" style={{border: '0px solid #ccc'}}>
                <div className="container d-flex-vertical">
                    <br/>
                    <br/>
                    <h1>Admission document upload</h1>
                    <br/>
                    <p className="text-info">Files to be uploaded are in .pdf format with size less than 500KB and images should be in .png or .jpg or .jpeg format with size less than 50KB.</p>
                    <br/><br/>

                    <label htmlFor="degreeSelect"><b>Please select any one of provided </b></label>
                    <br/>
                    <label htmlFor="degreeSelect"><b>Upload Documents for </b></label>
                    <input type="text" placeholder={degree} value={degree} disabled name="degreeSelect" required
                    />
                    <br/><br/>
                    <h2>Admission document upload</h2>
                    <p>Please upload the correct document which is uploaded during counselling and JEE
                        application.</p>
                    <br/>
                    <span hidden={!extraFields}>
                    <label htmlFor="docBtechMarksheet"><b>B.Tech Marksheet</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docBtechMarksheet"
                               onChange={onDocsChange}/>
                    </div>
                    <br/>
                    <br/>
                    <label htmlFor="docDegreeCertificate"><b>B.Tech Degree Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docDegreeCertificate"
                               onChange={onDocsChange}/>
                    </div>
                    <br/>
                    <br/>
                    <label htmlFor="docGateScorecard"><b>GATE Scorecard</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docGateScorecard" onChange={onDocsChange}/>
                    </div>
                         <br/>
                        </span>

                    <br/>
                    <label htmlFor="doc10Marksheet"><b>10th Marksheet</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="doc10Marksheet" onChange={onDocsChange}
                               ref={fileInput}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="doc12Marksheet"><b>12th Marksheet</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="doc12Marksheet" onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docEntranceExamAdmitCard"><b>Entrance Exam Admit card</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docEntranceExamAdmitCard"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docEntranceResult"><b>Entrance Exam Result pdf</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docEntranceResult"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docAadhaarCard"><b>Aadhaar card</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docAadhaarCard" onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docAntiRaggingCertificate"><b>Anti Ragging Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docAntiRaggingCertificate"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docTransferCertificate"><b>Transfer Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docTransferCertificate"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docDomicileCertificate"><b>Domicile Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docDomicileCertificate"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docIncomeCertificate"><b>Income Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docIncomeCertificate"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docCasteCertificate"><b>Caste Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='application/pdf' id="docCasteCertificate"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docPassportSizeImage"><b>Passport Size Image</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='image/jpeg' id="docPassportSizeImage"
                               onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docSelfSignature"><b>Self Signature</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='image/jpeg' id="docSelfSignature" onChange={onDocsChange}/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docFathersSignature"><b>Father's Signature</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" accept='image/jpeg' id="docFathersSignature"
                               onChange={onDocsChange}/>
                    </div>

                </div>
            </form>

            <div className="d-flex my-5">
                <button className="btn btn-outline-success w-30 solid text-center mx-4" onClick={handleUploadDocsButton}
                >Upload Documents
                </button>

                <button className="btn btn-outline-danger w-30 solid text-center mx-4" onClick={handleback}>Back
                </button>
            </div>


        </div>
    );
};

export default AdmissionDocumentUpload;
