import React, { useState } from 'react';
import axios from 'axios';

const Api6 = () => {
    const [image, processimage] = useState("");
   
    const [msg, updateMessage] = useState("Please Enter Details Bellow");

    const save = () => {
        // updateMessage("Please Wait Submitting...");
        // var url = "http://localhost:8081/savecontact";
        // var data = {
        //     "fullname": name,
        //     "mobileno": mobile,
        //     "fulladdress": address
        // };
        // axios.post(url , data)
        // .then(response =>{
        //     updateMessage(response.data);
        //     processName("");
        //     processMobile("");
        //     processAddress("");
        // })


        const formData =new FormData()
        formData.append('image', image)
        var url = "http://localhost:8081/savecontact"

        axios.post(url ,formData)
        .then(response =>{
            updateMessage(response.data);
            processimage("");
        })
    }

    function handelImage(e){
      console.log(e.target.files)
      processimage(e.target.files[0])
    }
    
    return (
        <div>
            <h1 align="center"> New Contact </h1>
            <p align="center">{msg}</p>
            <table align="center" cellPadding="15">
                <thead>
                    
                    <tr>
                        <th>Photo</th>
                        <td>
                            <input type="file"
                                onChange={handelImage} 
                          />
                        </td>
                    </tr>
                    
                  
                    <tr>
                        <th colSpan="2">
                            <button onClick={save}> Save Contact </button>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default Api6;