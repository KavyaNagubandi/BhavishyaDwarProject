import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';

import Jsonsampledata from './components/Jsonsampledata';
//import Greetings from './components/Greetings';

import Index from './components/Index';
import Dashboard from './components/Dashboard';
import AboutUs from './components/Aboutus';
import Contactus from './components/Contactus';
import Employerlogin from './components/Empolyerlogin';
import Employerreg from './components/Employerreg';
import Studentlogin from './components/Studentlogin';
import Studentreg from './components/Studentreg';
function App() {
  return (
    <Routes>
     <Route path='/' element={<Index/>}></Route>
     <Route path='Dashboard' element={<Dashboard/>}></Route>
     <Route path='Aboutus' element={<AboutUs/>}></Route>
     <Route path='Contactus' element={<Contactus/>}></Route>
     <Route path='Employerlogin' element={<Employerlogin/>}></Route>
     <Route path='Employerreg' element={<Employerreg/>}></Route>
     <Route path='Studentlogin' element={<Studentlogin/>}></Route>
     <Route path='Studentreg' element={<Studentreg/>}></Route>
    </Routes>
    
  );
}
export default App;

{/*
function App(){
  return (
    
    <div className="App">
      <Routes>
      <Route path='/' element={<Jsonsampledata/>}></Route>
      </Routes>
    </div>
    
  )
}
export default App;
*/}