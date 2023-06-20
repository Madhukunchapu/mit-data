import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component'


const PersonalInfo = () => {



    const [recordList, setRecordList] = useState([]);


    function handelFilter(event) {
        const newData = recordList.filter(row =>row.name.toLowerCase().includes(event.target.value.toLocaleLowerCase()) ||
        row.rollnumber.toLowerCase().includes(event.target.value.toLocaleLowerCase()) ||
        row.class.toLowerCase().includes(event.target.value.toLocaleLowerCase()))
        setRecordList(newData)
    }
       
    const columns = [
        {
            name: "RollNumber",
            selector: info => <Link className='links' to={`/${info.rollnumber}/data`}> {info.name} </Link>,
            sortable: true

        },
        {
            name: "StudentName",
            selector: info => info.rollnumber,
            sortable: true

        },
        {
            name: "Class",
            selector: info => info.class,
            sortable: true

        },
        // {
        //     name: "Photo",
        //     selector: info => <img src={info.photo} height="70" width="100" />
        // }
    ]

    const getRecord = () => {
        var url = "https://mti-apidata.onrender.com/student";
        axios.get(url).then(response => {
            setRecordList(response.data);
        })
    }

    useEffect(() => {
        getRecord();

    }, [true])


    return (

        <>
            <Link className='back1' to="/"><button>Back</button></Link>

            <div className="main_container">
                <div className="sub_container">
                    <h2>Students list</h2>
                    <div className="input__search">
                        <i className="fa fa-search icon"></i>
                        <input type="text" placeholder="Search here....."
                            onChange={handelFilter}
                            className="placehold" />

                    </div>

                    <DataTable
                        columns={columns}
                        data={recordList}
                        selectableRows
                        pagination
                    />

                </div>
            </div>
        </>
    )

}

export default PersonalInfo;
