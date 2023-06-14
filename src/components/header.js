import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import PersonalInfo from './studentslist';
import Data from './data';
import StepContext from './stepContext';
import Acadimic1 from './datasubmission/acadimic';
import Emotions from './datasubmission/emotionala';
import Skill from './datasubmission/skills';
import Physical1 from './datasubmission/physical';
import Achivements1 from './datasubmission/achivements';




const TopHeader = () => {
    return (
        <>
            <div>
                <img src="home1.jpg" alt="" height="650" width="100%" />

            </div>
            <nav className="logindiv2 p-2">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 ">
                        <img src="logo" alt="" height="150" width="100%"  style={{borderRadius: "50%",marginBottom:"45%"}}/>

                            <nav>
                                <Link to="/personal" id="menu">PersonalInfo</Link>
                                {/* <Link to="/:rollnumber/data" id="menu">User Data</Link> */}
                                <Link to="/submission" id="menu">Form Submissions</Link>
                                {/* <Link to="/" id="menu">Academic</Link>
                                <Link to="/" id="menu">Emotional</Link>
                                <Link to="/" id="menu">Skills</Link>
                                <Link to="/" id="menu">Physical</Link>
                                <Link to="/" id="menu">Achivements</Link> */}
                            </nav>
                        </div>


                    </div>

                    <Routes>

                        <Route path="/personal" element={<PersonalInfo />} />
                        <Route exact path="/:rollNumber/data" element={<Data />} />
                        <Route exact path="/submission" element={<StepContext />} />
                        <Route exact path="/academic" element={<Acadimic1 />} />
                        <Route exact path="/emotions" element={<Emotions />} />
                        <Route exact path="/skills" element={<Skill />} />
                        <Route exact path="/physical" element={<Physical1 />} />
                        <Route exact path="/achivement" element={<Achivements1 />} />



                    </Routes>




                </div>




            </nav>


            <div className="menu1">
                <button className="btn btn-white" onClick={Logout}>
                    <h4><Link to="/"> <i className="fa fa-power-off  ">Logout</i></Link> </h4>
                </button>

            </div>
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