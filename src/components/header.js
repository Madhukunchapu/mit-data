import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import PersonalInfo from './studentslist';
import Data from './data';
import StepContext from './stepContext';
// import { Table } from '@mui/material/Table';




const TopHeader = () => {
    return (
        <>
            <div>
                <img src="school3.jpg" alt="" height="650" width="100%" />

            </div>
            <nav className="logindiv2 p-2">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 ">
                            
                        <img src="logo" alt="" height="160" width="80%"  style={{borderRadius: "50%",marginBottom:"45%"}}/>
                          
                            
                            <nav>
                                <Link to="/personal" id="menu">PersonalInfo</Link>
                                <Link to="/submission" id="menu">Form Submissions</Link>
                               
                            </nav>
                        </div>


                    </div>

                    <Routes>

                        <Route path="/personal" element={<PersonalInfo />} />
                        <Route exact path="/:rollNumber/data" element={<Data />} />
                        <Route exact path="/submission" element={<StepContext />} />
                       
                    </Routes>




                </div>




            </nav>


            <div className="menu1">
                <button className="btn btn-white" onClick={Logout}>
                    <h4 style={{color:"red"}}> <i className="fa fa-power-off  ">Logout</i> </h4>
                </button>
               

            </div>
            
            <h1 style={{marginTop:"-45%", marginBottom:"15%",color:"blue",fontSize:"36px", marginLeft:"27%"}}>MOTHER THERESA ENGLISH MEDIUM SCHOOL
            <p style={{color:"red",fontSize:"22px", marginLeft:"15%"}}>AFFILIATED TO CBSE, New Delhi, Aff. No.-130687</p>
            <p style={{color:"black",fontSize:"20px"}}>Lingapuram(V), Muthukur(P), Peddapanjani(M), Chittoor, Andhra Pradesh, India,517247</p>
            </h1>
            <div className="menu2">
                Learning is Not attained by chance,<br />
                &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;        it must be sought for<br />
                &nbsp; &nbsp;&nbsp;&nbsp;                           with ardor and attended to <br />
                &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;                with diligence.

            </div>
        </>
    )


}
const Logout = () => {
    localStorage.clear() // to clean name, userid and all other data from localstorage
    window.location.href = "http://localhost:3000/#/";
    window.location.reload();
}

export default TopHeader;