import React, {useEffect, useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElementsCustom';
import {useHistory} from "react-router-dom";
import ReactDOM from 'react-dom';
import {signOut, getAuth} from "firebase/auth";
import Login from "../../Login/Login";
import App from "../../App";
import firebase from "firebase/compat";
import {useApp} from "../../Context/AppContext";


const NavbarCustom = () => {
    const auth = getAuth();
    const{hiddenCheck}= useApp();
    const{SetHiddenCheck}= useApp();
    const{adminUrl}= useApp();
    const{admissionURL}= useApp();
    const{SetAdminUrl}= useApp();
    const{SetAdmissionURL}= useApp();




    useEffect(()=>{
        console.log(auth)
        if(auth.currentUser===null){
            SetHiddenCheck(true)
        }
    },[auth])






    const history = useHistory()

    function logout() {
        //alert("Logout Successfully")
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('logout')
            SetAdminUrl('/adminLogin')
            SetAdmissionURL('/Login')


        }).catch((error) => {
            alert(error)
        });
        history.push("/")
    }


    return (
        <>
            <Nav className="d-flex">
                <Bars onClick={()=>{
                    if (document.getElementById('List-Nav').hidden){
                        document.getElementById('List-Nav').hidden = false
                    }else{
                        document.getElementById('List-Nav').hidden = true
                    }
                }}/>

                <NavMenu>

                    <a className="navbar-brand" href="/">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809"
                            width="60" height="80%" className="d-inline-block align-center rounded-circle" alt=""/>
                        &emsp; IIIT Vadodara
                    </a>

                    <NavLink to={admissionURL}>
                        Admission
                    </NavLink>
                    <NavLink to='/StudentLogin'>
                        Students
                    </NavLink>
                    <NavLink to='/FacultyLogin'>
                        Faculty
                    </NavLink>
                    <NavLink to={adminUrl}>
                        Admin
                    </NavLink>
                    <NavLink to='/Fees'>
                        Fees
                    </NavLink>
                    <NavLink to='/Article'>
                        Articles
                    </NavLink>
                    <NavLink to='/CitationSearch'>
                        Publications
                    </NavLink>

                    <form className="d-flex h-100">
                        &emsp;
                        <button hidden={hiddenCheck} className="btn btn-outline-success h-50 my-auto" onClick={logout} type="submit">Logout
                        </button>
                    </form>



                </NavMenu>


            </Nav>

            <nav hidden={true} className="d-md-none d-lg-none w-100 bg-gray-200" id="List-Nav">

                <ul className="navbar-nav d-inline-block  w-100" >


                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/" className="active d-block">Home</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/Login" className="active d-block">Admission</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/StudentLogin" className="active d-block">Students</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/FacultyLogin" className="active d-block">Faculty</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/adminLogin" className="active d-block">Admin</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/Fees" className="active d-block">Fees</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/Article" className="active d-block">Article</a>
                    </li>
                    <li className="p-1 bg-gray-200 hover:bg-gray-300">
                        <a href="/CitationSearch" className="active d-block">Publications</a>
                    </li>

                </ul>

            </nav>

        </>
    );
};

export default NavbarCustom;
