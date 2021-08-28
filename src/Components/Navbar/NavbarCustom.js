import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElementsCustom';

import ReactDOM from 'react-dom';
import {signOut, getAuth} from "firebase/auth";
import Login from "../../Login/login";

 function logout() {
    //alert("Logout Successfully")
    const auth = getAuth();
    signOut(auth).then(() => {
      ReactDOM.render(
        <React.StrictMode>
          <Login />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }).catch((error) => {
      alert(error)
    });
  
    
  
  }

const NavbarCustom = () => {
return (
	<>
	<Nav className="d-flex">
		<Bars />

		<NavMenu>

        <a className="navbar-brand" href="/">
        <img src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809" width="60" height="80%" className="d-inline-block align-center" alt=""/>
        &emsp; IIIT Vadodara
        </a>

		<NavLink to='/Admission' activeStyle>
			Admission
		</NavLink>
		<NavLink to='/Students' activeStyle>
			Students
		</NavLink>
		<NavLink to='/Faculty' activeStyle>
			Faculty
		</NavLink>
		<NavLink to='/Admin' activeStyle>
			Admin
		</NavLink>
		<NavLink to='/Fees' activeStyle>
			Fees
		</NavLink>

        <form className="d-flex h-100">
            <input className="form-control mx-auto h-50 my-auto" type="search" placeholder="Search" aria-label="Search"/>
            &emsp;
            <button className="btn btn-outline-success" onClick={logout} type="submit">Logout</button>
        </form>

		</NavMenu>

        
		
	</Nav>
	</>
);
};

export default NavbarCustom;
