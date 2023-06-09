import React, {useEffect , useState} from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';

const PersonalInfo = () =>{
    
   
    const[searchTerm,setsearchTerm]=useState("");
    const[recordList , setRecordList] = useState([]);
   
    const[order , setOrder] = useState("ASC");

    const sorting=(col)=>{
        if(order==="ASC"){
              const sorted=[...recordList].sort((a,b)=>
            a[col].toLowerCase()>b[col].toLowerCase()?1:-1
            );
            setRecordList(sorted);
            setOrder("DSC");
        }

        if(order==="DSC"){
            const sorted=[...recordList].sort((a,b)=>
            a[col].toLowerCase()<b[col].toLowerCase()?1:-1
            );
            setRecordList(sorted);
            setOrder("ASC");
        }
    };

    const getRecord = () =>{
        var url = "https://mti-school-data.onrender.com/academic";
        axios.get(url).then(response=>{
            setRecordList(response.data);
        })
    }

    const getRecord1 = () =>{
        var url = "https://mti-school-data.onrender.com/emotional";
        axios.get(url).then(response=>{
            setRecordList(response.data);
        })
    }

    const getRecord2 = () =>{
        var url = "https://mti-school-data.onrender.com/skills";
        axios.get(url).then(response=>{
            setRecordList(response.data);
        })
    }

    const getRecord3 = () =>{
        var url = "https://mti-school-data.onrender.com/physical";
        axios.get(url).then(response=>{
            setRecordList(response.data);
        })
    }

    const getRecord4 = () =>{
        var url = "https://mti-school-data.onrender.com/achivements";
        axios.get(url).then(response=>{
            setRecordList(response.data);
        })
    }


        useEffect(()=>{
            getRecord();
            getRecord1();
            getRecord2();
            getRecord3();
            getRecord4();
        },[true])

    
        return(
                <div className="container mt-5">
                    <div className="row">
                    <div className="col-lg-12 mt-4">
                        <div className="bg-white p-4 rounded">
                        
                        

                     
                      <div className="input__search">
                            <i className="fa fa-search icon"></i>
                            <input type="text" placeholder="Search....." 
                             onChange={(e)=>{ setsearchTerm(e.target.value)}}
                             className="placeholder" />

                        </div>
                        <table className="table table-bordered">
                             <thead>
                                <tr className="text-primary">
                                    <th onClick={()=>sorting("studentName")}> StudetName </th>
                                    <th onClick={()=>sorting("rollNumber")}> Roll Number  </th>   
                                </tr>
                            </thead>
                            <tbody>
                            {
 
                                    recordList.filter(val=>{
                                        if(searchTerm===""){
                                            return val;
                                        }else if(
                                            val.StudentName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                                            val.rollNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                                        
                            
                                            ){
                                            return val;
                                        }
                                    }).map((userinfo)=>{
                                        return(
                                            <tr key={userinfo.id}>
                                                
                                                <Link to={`/${userinfo.rollNumber}/data`}> {userinfo.studentName} </Link>
                                                <td>{userinfo.rollNumber}</td>
                                                
                                            </tr>
                                        );
                                    })
                                }
                                
                            </tbody>
                        </table>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                
            )

 }

export default PersonalInfo;