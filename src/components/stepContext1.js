

import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import Main from './datasubmission/main';
import UpMain from './update/upmain';
import { Link, useParams, useNavigate } from 'react-router-dom';


export const multiStepContext = React.createContext();
const StepContext1 = () => {

    const {id} = useParams(); // it use to capture value coming to url/path

    const [activeStep, setActiveStep] = React.useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, SetFinalData] = useState([]);
    const [message, processMessage] = useState("Edit Data Form ");

    const [data, setData] = useState([]);

    const navigate =useNavigate()
    
    
    
    useEffect(() => {
        axios.get("https://mti-school-data.onrender.com/student/"+id)
        .then(res => setData(res.data))
        .catch(err=>console.log(err))

    }, [])


    const nextStep = () => {
        if (activeStep < 5)
            setActiveStep((currentStep) => currentStep + 1)
    }

    const previousStep = () => {
        if (activeStep !== 1)
            setActiveStep((currentStep) => currentStep - 1)
    }


    
    function handelSubmit(event){
        event.preventDefault()
        processMessage("Please Wait Updating...");
        axios.put("https://mti-apidata.onrender.com/student/"+id, data)
        .then(res=>{
            alert(data.name +" Details UPdated  ")
            navigate('/personal')
        })
    }

    return (
        <div>
        
            <multiStepContext.Provider value={{data, setData, handelSubmit, message, activeStep, nextStep, previousStep, userData, setUserData, finalData, SetFinalData }}>
                <UpMain />
            </multiStepContext.Provider>
            
        </div>
    );
}

export default StepContext1;