import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PersonalInfo = () => {


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

    const getRecord = () => {
        var url = "https://mti-school-data.onrender.com/student";
        axios.get(url).then(response => {
            setRecordList(response.data);
        })
    }

    


    useEffect(() => {
        getRecord();
        
    }, [true])


    return (

        <>
            {/* <Link to="/"> <input className="back-btn1" value="Back" /></Link> */}
            <Link className='back1' to="/"><button>Back</button></Link>
            
            <div className="main_container">
                <div className="sub_container">
                    <h2>Students list</h2>
                    <div className="input__search">
                                <i className="fa fa-search icon"></i>
                                <input type="text" placeholder="Search here....."
                                    onChange={(e) => { setsearchTerm(e.target.value) }}
                                    className="placehold" />

                            </div>
            
                           
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th onClick={() => sorting("name")}> StudetName </th>
                                        <th onClick={() => sorting("rollnumber")}> Roll Number  </th>
                                        <th onClick={() => sorting("class")}> Roll Number  </th>
                                        <th>Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        recordList.filter(val => {
                                            if (searchTerm === "") {
                                                return val;
                                            } else if (
                                                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                                                val.rollnumber.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                                                val.class.toLowerCase().includes(searchTerm.toLocaleLowerCase())


                                            ) {
                                                return val;
                                            }
                                        }).map((userinfo) => {
                                            return (
                                                <tr key={userinfo.id}>

                                                    <Link className='links' to={`/${userinfo.rollnumber}/data`}> {userinfo.name} </Link>
                                                    <td>{userinfo.rollnumber}</td>
                                                    <td>{userinfo.class}</td>
                                                    <td><img src={userinfo.photo} height="50" width="50"/></td>
                                                </tr>
                                            );
                                        })
                                    }

                                </tbody>
                            </table>

                            
                </div>
            </div>
        </>
    )

}

export default PersonalInfo;