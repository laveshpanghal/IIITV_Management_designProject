import React, {createContext, useContext, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const AppContext = createContext();

function useApp() {
    return useContext(AppContext)
}



function AppProvider({children}) {
    const [rollNo, setRollNo] = useState("404");
    const [degree, setDegree] = useState("B.Tech")
    const [hiddenCheck,SetHiddenCheck] = useState(false)
    const [adminUrl,SetAdminUrl] = useState("/adminLogin")
    const [admissionURL,SetAdmissionURL] = useState("/Login")


    function renderToastError(text) {
        console.log(text)
        toast.error(text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function renderToast(text) {

        toast.success(text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    // <ToastContainer
    //           position="top-right"
    //           autoClose={5000}
    //           hideProgressBar={false}
    //           newestOnTop={false}
    //           closeOnClick
    //           rtl={false}
    //           pauseOnFocusLoss
    //           draggable
    //           pauseOnHover
    //       />

    const value = {rollNo,setRollNo,degree,hiddenCheck,SetHiddenCheck,setDegree,renderToast,renderToastError,adminUrl,SetAdminUrl,admissionURL,SetAdmissionURL};
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}

export {AppProvider, useApp};