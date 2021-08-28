// import "./App.css"
import React from 'react';
import NavbarCustom from './Components/Navbar/NavbarCustom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages';
import Admission from './Components/Pages/Admission';
import Students from './Components/Pages/Students';
import Admin from './Components/Pages/Admin';
import Faculty from './Components/Pages/Faculty';
import Fees from './Components/Pages/Fees';




function App() {
  return(
    <Router>
    <NavbarCustom />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Admission' component={Admission} />
      <Route path='/Students' component={Students} />
      <Route path='/Faculty' component={Faculty} />
      <Route path='/Fees' component={Fees} />
      <Route path='/Admin' component={Admin} />
    </Switch>
  </Router>

  );
  
}

export default App;
