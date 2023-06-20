
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // after installing the react-router-dom we will have to import it here
import Login from './components/login';
import TopHeader from './components/header';
import PersonalInfo from './components/studentslist';
import Data from './components/data';
import StepContext from './components/stepContext';



function App() {

  if (localStorage.getItem("userid") == null)  {
    var page = <>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </>
  } else {
    var page = <>
      <Routes>
        <Route exact path="/" element={<TopHeader />} />
        <Route exact path="/personal" element={<PersonalInfo />} />
        <Route exact path="/:rollnumber/data" element={<Data />} />
        <Route exact path="/submission" element={<StepContext />} />
       
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