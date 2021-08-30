import React, {useState} from "react";
import "../Styles/AdmissionForm.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import realDb from "../../../index";
import {ref,set} from "firebase/database";
import {useHistory} from "react-router-dom";


const AdmissionDocumentUpload = () => {
    const history =useHistory()

    const [startDate, setStartDate] = useState(new Date());

    const handleAdmissionFormSubmit = (e) => {

        e.preventDefault()


        // set(ref(realDb,"AdmissionForms/2021/"+data.entranceExamRollNo),data).then((history)=>{
        //
        //
        //
        // })


    }


    return (
        <div>

            <form action="/" style={{border: '0px solid #ccc'}}>
                <div className="container d-flex-vertical">
                    <br/>
                    <br/>
                    <h2>Admission document upload</h2>
                    <p>Please upload the correct document which is uploaded during counselling and JEE
                        application.</p>
                    <br/>
                    <label htmlFor="doc10Marksheet"><b>10th Marksheet</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="doc10Marksheet"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="doc12Marksheet"><b>12th Marksheet</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="doc12Marksheet"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docEntranceExamAdmitCard"><b>Entrance Exam Admit card</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docEntranceExamAdmitCard"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docEntranceResult"><b>Entrance Exam Result pdf</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docEntranceResult"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docAadhaarCard"><b>Aadhaar card</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docAadhaarCard"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docAntiRaggingCertificate"><b>Anti Ragging Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docAntiRaggingCertificate"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docTransferCertificate"><b>Transfer Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docTransferCertificate"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docDomicileCertificate"><b>Domicile Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docDomicileCertificate"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docIncomeCertificate"><b>Income Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docIncomeCertificate"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docCasteCertificate"><b>Caste Certificate</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docCasteCertificate"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docPassportSizeImage"><b>Passport Size Image</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docPassportSizeImage"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docSelfSignature"><b>Self Signature</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docSelfSignature"/>
                    </div>
                    <br/><br/>
                    <label htmlFor="docFathersSignature"><b>Father's Signature</b></label>
                    <br/>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="docFathersSignature"/>
                    </div>

                </div>
            </form>

            <div className="d-flex my-5">
                <button className="btn btn-outline-success w-30 solid text-center mx-4"
                        >Upload Documents
                </button>

                <button className="btn btn-outline-danger w-30 solid text-center mx-4">Back</button>
            </div>


        </div>
    );
};

export default AdmissionDocumentUpload;
