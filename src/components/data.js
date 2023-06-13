import React, { useState,useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';


 const Data=()=>{
     const{rollnumber}=useParams(); // it use to capture value coming to url/path
   
    
    const[recordList , setRecordList] = useState([]);

    const getRecord = () =>{
        var url = "https://mti-school-data.onrender.com/student";
       axios.get(url).then(response=>{
        let test= response.data.filter(student => student.rollnumber==rollnumber);
            setRecordList(test)
            
        })
    }

        useEffect(()=>{
            getRecord();
            
        },[true])


    return (
        <>
                <Link to="/:rollNumber/data"><input className="back-btn1" value="Back" /></Link>

        <div>

</div>

<div className="main_container1">
                <div className="sub_container1">
                <div >
                    <h1 className="text-danger">Student Details</h1>
                    
                </div>
                <div>

                <details>
                    
                    <summary id='menu3'>ACADEMICS DEVELOPMENT</summary>
                    
                    <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                    <th>RollNumber</th>
                                    <th> StudentName </th>
                                    <th>Photo</th>
                                    <th>Class</th>
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
                                                    <td>{studentinfo.rollnumber}</td>
                                                    <td>{studentinfo.name}</td>
                                                    <td><img src={studentinfo.photo} height="50" width="50"/></td>
                                                    <td>{studentinfo.class}</td>
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
                                { recordList.map((studentinfo)=>{
                                        return(
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

                       </details>
                        <details>
                    
                    <summary id='menu3'>EMOTIONAL DEVELOPMENT</summary>
                    
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
                                { recordList.map((studentinfo)=>{
                                        return(
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
              </details>
                        <details>
                    
                    <summary id='menu3'>SKILL/TALENT DEVELOPMENT</summary>
                    
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
                                { recordList.map((studentinfo)=>{
                                        return(
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
              </details>
                        <details>
                    
                    <summary id='menu3'>PHYSICAL DEVELOPMENT</summary>
                    

                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                   
                                   <th>Height</th>
                                   <th>Weight</th>
                                   <th>BodyMassIndex</th>
                                </tr>
                            </thead>
                            <tbody>
                                { recordList.map((studentinfo)=>{
                                        return(
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
              </details>
                        <details>
                    
                    <summary id='menu3'>ACHIVEMENTS DEVELOPMENT</summary>
                    
                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                  
                                   <th>Achivements</th>
                                </tr>
                            </thead>
                            <tbody>
                                { recordList.map((studentinfo)=>{
                                        return(
                                            <tr key={studentinfo.id}>
                                                
                                                <td> {studentinfo.achive} </td>
                                                
                                               
                                            </tr>
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
              
              </details>
              

                </div>
            </div>
        </div>
        </>
    )
 }
 export default Data;
 