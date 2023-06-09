

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // after installing the react-router-dom we will have to import it here
import Login from './components/login';
import TopHeader from './components/header';
import PersonalInfo from './components/studentslist';
import Data from './components/data';
import Academic from './components/submissions/academic';
import Emotional from './components/submissions/emotional';
import Skills from './components/submissions/skills';
import Physical from './components/submissions/physical';
import Achivements from './components/submissions/achivements';
// import Login1 from './components/login1';


function App() {

  if (localStorage.getItem("userid") == null) {
    var page = <>
      <Routes>
      
        <Route exact path="/" element={<Login />} />
        <Route exact path="/78" element={<TopHeader />} /> 
         <Route exact path="/personal" element={<PersonalInfo />} />
        <Route exact path="/:rollNumber/data" element={<Data />} />
        <Route exact path="/academic" element={<Academic />} />
        <Route exact path="/emotional" element={<Emotional/>} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/physical" element={<Physical />} />
        <Route exact path="/achivements" element={<Achivements/>} />
        {/* <Route exact path="/78" element={<TopHeader />} />  */}

      </Routes>
    </>
  } else {
    var page = <>
      <Routes>
        <Route exact path="/78" element={<TopHeader />} /> 
         <Route exact path="/personal" element={<PersonalInfo />} />
        <Route exact path="/:rollNumber/data" element={<Data />} />
        <Route exact path="/academic" element={<Academic />} />
        <Route exact path="/emotional" element={<Emotional/>} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/physical" element={<Physical />} />
        <Route exact path="/achivements" element={<Achivements/>} />
      </Routes>
    </>
  }
  return (
    <HashRouter>
      {page}

    </HashRouter>
  );
}

export default App;