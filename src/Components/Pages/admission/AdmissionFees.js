import React, {useState} from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import {useHistory} from "react-router-dom";



const AdmissionFees = () => {
    const RealDb = ref(getDatabase())
    const history = useHistory()

    const handleback = (history) => {
        history("/AdmissionForm")

    }

    const [payOnline, setPayOnline] = useState(false);
    const [paid, setPaid] = useState(false);
    const onFeesTypeSelectChange = (e) => {
        if (e.target.value === "PayFees") {
            setPayOnline(true)
        } else {
            setPayOnline(false)
        }


    }

    const [data, setData] = useState(
        {
            paymentType: "",
            dop: "",
            amount: "Male",
            paymentId: ""

        }
    )

    function onChange(e) {
        e.persist();
        setData(() => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }

    // function verify(e) {
    //
    //     e.preventDefault()
    //
    //     var applicantEnrollmentNo = document.getElementById("enrollmentInput").value;
    //     console.log(applicantEnrollmentNo)
    //     if (applicantEnrollmentNo === "") {
    //
    //         alert("Enrollment no should not be blank");
    //
    //     } else {
    //
    //
    //         get(child(RealDb, `counsellingEnrollment/2021/${applicantEnrollmentNo}/status`)).then((snapshot) => {
    //             if (snapshot.exists()) {
    //
    //                 if(snapshot.val()==="verified")
    //                 {
    //                     history.push("/AdmissionForm")
    //
    //                 }
    //
    //             } else {
    //                 alert("Not eligible for admission")
    //                 console.log("No data available");
    //             }
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    //
    //
    //     }
    // }


    return (
        <div className="container">

            <form action="/" style={{border: '0px solid #ccc'}}>
                <div className="container d-flex-vertical">
                    <br/>
                    <h2>Pay your admission fees</h2>
                    <br/>
                    <label htmlFor="feesTypeSelect"><b>Please select any one of provided </b></label>
                    <br/>
                    <select name="feesTypeSelect" id="feesTypeSelect" required onChange={onFeesTypeSelectChange}>
                        <option value="PayFees">Pay fees</option>
                        <option value="PaidAlready">Paid fees</option>
                    </select><br/><br/><hr/><br/><br/>

                    <span hidden={payOnline}>

                    <label htmlFor="dateOfPayment"><b>Date of payment </b></label>
                    <br/>
                    <input
                        type="date"
                        required
                        placeholder="select Date of payment"
                        name="dateOfPayment"
                        onChange={(e) => onChange(e)}
                    />
                    <br/><br/>
                    <label htmlFor="paymentId"><b>Payment id or reference no</b></label>
                    <input type="text" placeholder="Enter payment id" name="paymentId" required
                           onChange={onChange}/>
                    <br/>
                        <br/>
                    <label htmlFor="paymentType"><b>Payment type</b></label>
                    <br/>
                    <select name="paymentType" id="paymentType" required onChange={(e) => onChange(e)}>
                        <option value="dd">Demand Draft</option>
                        <option value="online">Online mode</option>
                    </select>
                    <br/>

                    </span>

                    <span className="d-flex"  >

                        <div className="mx-10" hidden={!payOnline}>

                        <p>You will be redirected to payment gateway in some time do not press back or refresh.</p>
                        <button className="w-50 btn btn-outline-success my-5">Pay online</button>

                        </div>

                    </span>


                </div>
            </form>

            <div className="d-flex my-5">
                <button className="btn btn-outline-success w-30 solid text-center mx-4"
                >Done
                </button>

                <button className="btn btn-outline-danger w-30 solid text-center mx-4" onClick={handleback}>Back
                </button>
            </div>


        </div>
    );
};

export default AdmissionFees;
