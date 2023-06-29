import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Data = () => {




    const { rollnumber } = useParams(); // it use to capture value coming to url/path

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);


    const [recordList, setRecordList] = useState([]);

    const getRecord = () => {
        var url = "https://mti-apidata.onrender.com/student";
        axios.get(url).then(response => {
            let test = response.data.filter(student => student.rollnumber == rollnumber);
            setRecordList(test)

        })
    }

    useEffect(() => {
        getRecord();

    }, [true])


    return (
        <>
            <div id="Main-Container">
                <div className="Banner-Top-Main">
                    <h1 className="text-danger">Student Marks List</h1>

                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-primary">

                                <th>RollNumber</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                                                </tr>
                        </thead>
                        <tbody>
                            {recordList.map((studentinfo) => {
                                return (
                                    <tr key={studentinfo.id}>

                                        <td>{studentinfo.rollnumber}</td>
                                        <td>{studentinfo.name}</td>
                                        <td>{studentinfo.class}</td>


                                    </tr>
                                );
                            })
                            }

                        </tbody>
                    </table>

                </div>

                <div className="Home-Left-Menu-Main">
                    <div className="wrapper">
                        <div className="sidebar">

                            <ul>
                                <Link className='back' to="/"><button>Back</button></Link>
                                <p id='menu3' onClick={() => setShow(!show)}> Academics Development</p>
                                <p id='menu3' onClick={() => setShow2(!show2)}> Emotional Development</p>
                                <p id='menu3' onClick={() => setShow3(!show3)}> Skill/Talent Development</p>
                                <p id='menu3' onClick={() => setShow4(!show4)}>Physical Development</p>
                                <p id='menu3' onClick={() => setShow5(!show5)}> Achievement Development</p>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="main-contents">



                    <div className="main_container1">
                        <div className="sub_container1">


                            <div className="tables">

                                {
                                    show && <div>
                                        <h3>Academics Development</h3>
                                        <table className="table table-bordered  ">
                                            <thead>
                                                <tr>
                                                    <th>English</th>
                                                    <th>Hindi</th>
                                                    <th>Telugu</th>
                                                    <th>Maths</th>
                                                    <th>Science</th>
                                                    <th>Social</th>
                                                    <th>Environmental Science</th>
                                                    <th>ICT</th>
                                                    <th>Robotics</th>
                                                    <th>General Knowledge</th>
                                                    <th>Value Education</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    recordList.map((studentinfo) => {
                                                        return (
                                                            <tr key={studentinfo.id}>

                                                                <td>{studentinfo.english}</td>
                                                                <td>{studentinfo.hindi}</td>
                                                                <td>{studentinfo.telugu}</td>
                                                                <td>{studentinfo.maths}</td>
                                                                <td>{studentinfo.science}</td>
                                                                <td>{studentinfo.social}</td>
                                                                <td>{studentinfo.es}</td>
                                                                <td>{studentinfo.ict}</td>
                                                                <td>{studentinfo.robotics}</td>
                                                                <td>{studentinfo.gk}</td>
                                                                <td>{studentinfo.ve}</td>


                                                            </tr>
                                                        );
                                                    })
                                                }

                                            </tbody>
                                        </table>

                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Life Skills</th>
                                                    <th>II-Maths</th>
                                                    <th>IIT-Physics</th>
                                                    <th>IIT-Chemistry</th>
                                                    <th>IIT-Reasoning</th>
                                                    <th>NEET-Biology</th>
                                                    <th>NEET-Zoology</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {recordList.map((studentinfo) => {
                                                    return (
                                                        <tr key={studentinfo.id}>
                                                            <td> {studentinfo.skills} </td>
                                                            <td> {studentinfo.iitm} </td>
                                                            <td> {studentinfo.iitp} </td>
                                                            <td> {studentinfo.iitc} </td>
                                                            <td> {studentinfo.iitr} </td>
                                                            <td> {studentinfo.neetb} </td>
                                                            <td> {studentinfo.neetz} </td>

                                                        </tr>
                                                    );
                                                })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                }
                                {
                                    show2 &&
                                    <div>
                                    <h3>Emotional Development</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>AngerManagement</th>
                                                <th>HappinessIndex</th>
                                                <th>DecissionMaking</th>
                                                <th>Obediance</th>
                                                <th>Understanding</th>
                                                <th>Brave</th>
                                                <th>ProblemSolving</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recordList.map((studentinfo) => {
                                                return (
                                                    <tr key={studentinfo.id}>
                                                        <td> {studentinfo.am} </td>
                                                        <td> {studentinfo.happy} </td>
                                                        <td> {studentinfo.dm} </td>
                                                        <td> {studentinfo.obedience} </td>
                                                        <td> {studentinfo.under} </td>
                                                        <td> {studentinfo.brave} </td>
                                                        <td> {studentinfo.ps} </td>




                                                    </tr>
                                                );
                                            })
                                            }

                                        </tbody>
                                    </table>
                                    </div>
                                }
                                {
                                    show3 &&
                                    <div>
                                        <h3>Skill/Talent Development</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>

                                                <th>Techinical</th>
                                                <th>Art</th>
                                                <th>Communication</th>
                                                <th>Sports</th>
                                                <th>Dance</th>
                                                <th>Music</th>
                                                <th>Karate</th>
                                                <th>Others-I</th>
                                                <th>Others-II</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recordList.map((studentinfo) => {
                                                return (
                                                    <tr key={studentinfo.id}>

                                                        <td> {studentinfo.technical} </td>
                                                        <td> {studentinfo.art} </td>
                                                        <td> {studentinfo.communication} </td>
                                                        <td> {studentinfo.sports} </td>
                                                        <td> {studentinfo.dance} </td>
                                                        <td> {studentinfo.music} </td>
                                                        <td> {studentinfo.karate} </td>
                                                        <td> {studentinfo.others1} </td>
                                                        <td> {studentinfo.others2} </td>


                                                    </tr>
                                                );
                                            })
                                            }

                                        </tbody>
                                    </table>
                                    </div>
                                }
                                {
                                    show4 &&
                                    <div>
                                        <h3>Physical Development</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="text-primary">

                                                <th>Height</th>
                                                <th>Weight</th>
                                                <th>BodyMassIndex</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recordList.map((studentinfo) => {
                                                return (
                                                    <tr key={studentinfo.id}>

                                                        <td> {studentinfo.height} </td>
                                                        <td> {studentinfo.weight} </td>
                                                        <td> {studentinfo.bmi} </td>


                                                    </tr>
                                                );
                                            })
                                            }

                                        </tbody>
                                    </table>
                                    </div>
                                }
                                {
                                    show5 &&
                                    <div>
                                    <h3>Achievements Development</h3>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="text-primary">

                                                <th>Achivements</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recordList.map((studentinfo) => {
                                                return (
                                                    <tr key={studentinfo.id}>

                                                        <td> {studentinfo.achive} </td>


                                                    </tr>
                                                );
                                            })
                                            }

                                        </tbody>
                                    </table>
                                    </div>
                                }



                            </div>
                        </div>
                    </div>

                </div>



            </div>

           
        </>
    )
}
export default Data;
