import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component'

// const PersonalInfo1 = () => {



//     const [recordList, setRecordList] = useState([]);


//     function handelFilter(event) {
//         const newData = recordList.filter(row =>row.name.toLowerCase().includes(event.target.value.toLocaleLowerCase()) ||
//         row.rollnumber.toLowerCase().includes(event.target.value.toLocaleLowerCase()) ||
//         row.class.toLowerCase().includes(event.target.value.toLocaleLowerCase()))
//         setRecordList(newData)
//     }
       
//     const columns = [
//         {
//             name: "RollNumber",
//             selector: info => <Link className='links' to={`/${info.rollnumber}/data`}> {info.name} </Link>,
//             sortable: true

//         },
//         {
//             name: "StudentName",
//             selector: info => info.rollnumber,
//             sortable: true

//         },
//         {
//             name: "Class",
//             selector: info => info.class,
//             sortable: true

//         },
//         {
//             name: "Photo",
//             selector: info => <img src={info.photo} height="50" width="50" />
//         }
//     ]

//     const getRecord = () => {
//         var url = "https://mti-school-data.onrender.com/student";
//         axios.get(url).then(response => {
//             setRecordList(response.data);
//         })
//     }

//     useEffect(() => {
//         getRecord();

//     }, [true])


//     return (

//         <>
//             <Link className='back1' to="/"><button>Back</button></Link>

//             <div className="main_container">
//                 <div className="sub_container">
//                     <h2>Students list</h2>
//                     <div className="input__search">
//                         <i className="fa fa-search icon"></i>
//                         <input type="text" placeholder="Search here....."
//                             onChange={handelFilter}
//                             className="placehold" />

//                     </div>

//                     <DataTable
//                         columns={columns}
//                         data={recordList}
//                         selectableRows
//                         pagination
//                     />

//                 </div>
//             </div>
//         </>
//     )

// }

// export default PersonalInfo1;









// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

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




// create table studentlist(
//     studentid		int(10) primary key auto_increment,
//     name	varchar(255),
//     rollnumber	varchar(255),
//     photo	varchar(255),
//     class	varchar(255),
//     english	varchar(255),
//     hindi	varchar(255),
//     telugu	varchar(255),
//     maths	varchar(255),
//     science	varchar(255),
//     social	varchar(255),
//     es	varchar(255),
//     ict	varchar(255),
//     robotics	varchar(255),
//     gk	varchar(255),
//     ve	varchar(255),
//     skills	varchar(255),
//     iitm	varchar(255),
//     iitp	varchar(255),
//     iitc	varchar(255),
//     iitr	varchar(255),
//     neetb	varchar(255),
//     neetz	varchar(255),
//     am	varchar(255),
//     happy	varchar(255),
//     dm	varchar(255),
//     obedince	varchar(255),
//     under	varchar(255),
//     brave	varchar(255),
//     ps	varchar(255),
//     technical	varchar(255),
//     art	varchar(255),
//     communication	varchar(255),
//     sports	varchar(255),
//     dance	varchar(255),
//     music	varchar(255),
//     karate	varchar(255),
//     others1	varchar(255),
//     others2	varchar(255),
//     height	varchar(255),
//     weight	varchar(255),
//     bmi	varchar(255),
//     achive	varchar(255)
        
// );

// insert into studentlist(studentid, name, photo, class, english, hindi, telugu, maths, science, social,es, ict, robotics,gk, ve, skills, iitm, iitp, iitc, iitr, neetb, neetz, am, happy, dm, obedince, under, brave, ps, technical, art, communication, sports, dance, music, karate, others1, others2, height, weight, bmi, achive )
// 			values('1','praveen','2k231','https://img.freepik.com/premium-photo/awesome-bearded-man-portrait-university-library_280538-4162.jpg','5','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('2','Kalyan','2k232','https://img.freepik.com/premium-photo/portrait-caucasian-college-student-man-library-shallow-depth-field_600776-12673.jpg','7','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('3','indra','2k233','https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-black-folder-looking_1298-234.jpg','8','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('4','vasu','2k234','https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-blackboard_1298-190.jpg','9','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('5','vignesh','2k235','https://st3.depositphotos.com/2389277/19150/i/600/depositphotos_191502132-stock-photo-happy-man-working-on-laptop.jpg','8','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('6','rahul','2k236','https://c8.alamy.com/comp/F68226/portrait-of-a-college-student-man-in-library-shallow-depth-of-field-F68226.jpg','5','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('7','harsha','2k237','https://c8.alamy.com/comp/EWT373/in-the-library-handsome-male-student-with-laptop-and-books-working-EWT373.jpg','8','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('8','preetham','2k238','https://us.123rf.com/450wm/thelivephotos/thelivephotos2207/thelivephotos220700177/188442772-positive-indian-or-arabian-curly-haired-guy-student-freelancer-in-a-casual-shirt-holds-an-open.jpg','6','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('9','nivedita','2k239','https://images.indianexpress.com/2022/05/Internships.jpg','7','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('10','riya','2k2310','https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg','6','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('11','giri','2k2311','https://img.freepik.com/free-photo/curly-hair-boy-optique-glasses-holding-his-backpack-is-ready-travel_114579-13451.jpg','5','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('12','naveen','2k2312','https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg','7','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('13','mallikarjuna','2k2313','https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-260nw-2071252046.jpg','7','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs'),
//             ('14','sujata','2k2314','https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg','2','89','98','76','96', '68','89','98','72','91','83','69','89','98','76','96', '68','89','98','72','91','83','69', '89','98','76','96', '68','89','98','72','91','83','69','98','5.1feet','51kg','good','Reactjs');