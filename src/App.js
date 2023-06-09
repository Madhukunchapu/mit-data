

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // after installing the react-router-dom we will have to import it here
import Login from './components/login';


function App() {

  if (localStorage.getItem("userid") == null) {
    var page = <>
      <Routes>
      
        <Route exact path="/" element={<Login />} />
        
      </Routes>
    </>
  } else {
    var page = <>
      <Routes>
      <Route exact path="/" element={<Login/>} />
        
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