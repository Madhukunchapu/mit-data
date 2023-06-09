import React, { useState,useEffect } from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';
import testUtils from 'react-dom/test-utils';

 const Data=()=>{
     const{rollNumber}=useParams(); // it use to capture value coming to url/path
   
    
    const[recordList , setRecordList] = useState([]);
    const[recordList1 , setRecordList1] = useState([]);
    const[recordList2 , setRecordList2] = useState([]);
    const[recordList3 , setRecordList3] = useState([]);
    const[recordList4 , setRecordList4] = useState([]);

    const getRecord = () =>{
        var url = "https://mti-school-data.onrender.com/academic";
       axios.get(url).then(response=>{
        let test= response.data.filter(academic => academic.rollNumber==rollNumber);
            setRecordList(test)
            
        })
    }

    const getRecord1 = () =>{
        var url = "https://mti-school-data.onrender.com/emotional";
       axios.get(url).then(response=>{
        let test= response.data.filter(academic => academic.rollNumber==rollNumber);
            setRecordList1(test)
            
        })
    }
    const getRecord2 = () =>{
        var url = "https://mti-school-data.onrender.com/skills";
       axios.get(url).then(response=>{
        let test= response.data.filter(academic => academic.rollNumber==rollNumber);
            setRecordList2(test)
            
        })
    }
    const getRecord3 = () =>{
        var url = "https://mti-school-data.onrender.com/physical";
       axios.get(url).then(response=>{
        let test= response.data.filter(academic => academic.rollNumber==rollNumber);
            setRecordList3(test)
            
        })
    }

    const getRecord4 = () =>{
        var url = "https://mti-school-data.onrender.com/achivements";
       axios.get(url).then(response=>{
        let test= response.data.filter(academic => academic.rollNumber==rollNumber);
            setRecordList4(test)
            
        })
    }
        useEffect(()=>{
            getRecord();
            getRecord1();
            getRecord2();
            getRecord3();
            getRecord4();
        },[true])


    return (
        <div className="container mt-4">
            <div className="row">
                <div >
                    <h1 className="text-danger">Student Details</h1>
                    
                </div>
                <div>

                <details>
                    
                    <summary>ACADEMICS DEVELOPMENT</summary>
                    
                <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                   <th>RollNumber</th>
                                    <th> StudentName </th>
                                   <th>Endlish</th>
                                   <th>Hindi</th>
                                   <th>Maths</th>
                                   <th>Science</th>
                                   <th>Social</th>
                                   <th>Environmental Science</th>
                                   <th>ICT</th>
                                   <th>Robotics</th>
                                   <th>General Knowledge</th>
                                   <th>Value Education</th>
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
                                                <td> {studentinfo.rollNumber} </td>
                                                <td> {studentinfo.studentName} </td>
                                                <td> {studentinfo.english} </td>
                                                <td> {studentinfo.hindi} </td>
                                                <td> {studentinfo.telugu} </td>
                                                <td> {studentinfo.maths} </td>
                                                <td> {studentinfo.science} </td>
                                                <td> {studentinfo.social} </td>
                                                <td> {studentinfo.environmentalScience} </td>
                                                <td> {studentinfo.ict} </td>
                                                <td> {studentinfo.robotics} </td>
                                                <td> {studentinfo.generalScience} </td>
                                                <td> {studentinfo.valueEduacation} </td>
                                                <td> {studentinfo.iitMaths} </td>
                                                <td> {studentinfo.iitPhysics} </td>
                                                <td> {studentinfo.iitChemistry} </td>
                                                <td> {studentinfo.iitReasoning} </td>
                                                <td> {studentinfo.neetBiology} </td>
                                                <td> {studentinfo.neetZoology} </td>
                                                
                                               
                                            </tr>
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>

                       </details>
                        <details>
                    
                    <summary>EMOTIONAL DEVELOPMENT</summary>
                    
                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                   <th>RollNumber</th>
                                    <th> StudentName </th>
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
                                { recordList1.map((studentinfo)=>{
                                        return(
                                            <tr key={studentinfo.id}>
                                                <td> {studentinfo.rollNumber} </td>
                                                <td> {studentinfo.studentName} </td>
                                                <td> {studentinfo.angerManagement} </td>
                                                <td> {studentinfo.happinessIndex} </td>
                                                <td> {studentinfo.decissionMaking} </td>
                                                <td> {studentinfo.obedience} </td>
                                                <td> {studentinfo.understanding} </td>
                                                <td> {studentinfo.brave} </td>
                                                <td> {studentinfo.problemSolving} </td>

                                                
                                               
                                            </tr>
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
              </details>
                        <details>
                    
                    <summary>SKILL/TALENT DEVELOPMENT</summary>
                    
                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                   <th>RollNumber</th>
                                    <th> StudentName </th>
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
                                { recordList2.map((studentinfo)=>{
                                        return(
                                            <tr key={studentinfo.id}>
                                                <td> {studentinfo.rollNumber} </td>
                                                <td> {studentinfo.studentName} </td>
                                                <td> {studentinfo.techinical} </td>
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
                    
                    <summary>PHYSICAL DEVELOPMENT</summary>
                    

                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                   <th>RollNumber</th>
                                    <th> StudentName </th>
                                   <th>Height</th>
                                   <th>Weight</th>
                                   <th>BodyMassIndex</th>
                                </tr>
                            </thead>
                            <tbody>
                                { recordList3.map((studentinfo)=>{
                                        return(
                                            <tr key={studentinfo.id}>
                                                <td> {studentinfo.rollNumber} </td>
                                                <td> {studentinfo.studentName} </td>
                                                <td> {studentinfo.hegiht} </td>
                                                <td> {studentinfo.weight} </td>
                                                <td> {studentinfo.bodyMassIndex} </td>
                                                
                                               
                                            </tr>
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
              </details>
                        <details>
                    
                    <summary>ACHIVEMENTS DEVELOPMENT</summary>
                    
                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                   <th>RollNumber</th>
                                    <th> StudentName </th>
                                   <th>Achivements</th>
                                </tr>
                            </thead>
                            <tbody>
                                { recordList4.map((studentinfo)=>{
                                        return(
                                            <tr key={studentinfo.id}>
                                                <td> {studentinfo.rollNumber} </td>
                                                <td> {studentinfo.studentName} </td>
                                                <td> {studentinfo.achivements} </td>
                                                
                                               
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
    )
 }
 export default Data;
 