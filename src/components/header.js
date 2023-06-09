import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from "react-router-dom";
import PersonalInfo from './studentslist';
import Data from './data';
import Academic from './submissions/academic';
import Emotional from './submissions/emotional';
import Skills from './submissions/skills';
import Physical from './submissions/physical';
import Achivements from './submissions/achivements';




const TopHeader = () => {
    return (
        <>

            <nav className="navbar    p-2">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12 ">
                            <nav>
                                <Link to="/personal" id="menu">PersonalInfo</Link>
                                <Link to="/:rollNumber/data" id="menu">User Data</Link>
                                <Link to="/users" id="menu">Users Information</Link>
                                <Link to="/academic" id="menu">Academic</Link>
                                <Link to="/emotional" id="menu">Emotional</Link>
                                <Link to="/skills" id="menu">Skills</Link>
                                <Link to="/physical" id="menu">Physical</Link>
                                <Link to="/achivements" id="menu">Achivements</Link>
                            </nav>
                        </div>

                        <Routes>

                            <Route path="/personal" element={<PersonalInfo />} />
                            <Route exact path="/:id/data" element={<Data />} />
                            <Route exact path="/academic" element={<Academic />} />
                            <Route exact path="/emotional" element={<Emotional />} />
                            <Route exact path="/skills" element={<Skills />} />
                            <Route exact path="/physical" element={<Physical />} />
                            <Route exact path="/achivements" element={<Achivements/>} />





                        </Routes>




                    </div>

                </div>
                <div className="text-end">
                    <button className="btn btn-white  btn-sm" onClick={Logout}>
                        <h6><Link to="/"> <i className="fa fa-power-off txt ">Logout</i></Link> </h6>
                    </button>
                </div>
            </nav>
        </>
    )


}
const Logout = () => {
    localStorage.clear() // to clean name, userid and all other data from localstorage
    window.location.href = "http://localhost:3000/#/";
    window.location.reload();
}

export default TopHeader;