

import React, { useState } from 'react';
import axios from 'axios';
import Main from './datasubmission/main';


export const multiStepContext = React.createContext();
const StepContext = () => {

    const [activeStep, setActiveStep] = React.useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, SetFinalData] = useState([]);
    const [message, processMessage] = useState("Please Enter The Below Details");

    const nextStep = () => {
        if (activeStep < 5)
            setActiveStep((currentStep) => currentStep + 1)
    }

    const previousStep = () => {
        if (activeStep !== 1)
            setActiveStep((currentStep) => currentStep - 1)
    }


    const submitData = () => {
        var Data = {
            
            name:userData.name,
            rollnumber:userData.rollnumber,
            // photo:userData.photo,
            class:userData.class,
            english:userData.english,
            hindi:userData.hindi,
            telugu:userData.telugu,
            maths:userData.maths,
            science:userData.science,
            social:userData.social,
            es:userData.es,
            ict:userData.ict,
            robotics:userData.robotics,
            gk:userData.gk,
            ve:userData.ve,
            skills:userData.skills,
            iitm:userData.iitm,
            iitp:userData.iitp,
            iitc:userData.iitc,
            iitr:userData.iitr,
            neetb:userData.neetb,
            neetz:userData.neetz,
            am:userData.am,
            happy:userData.happy,
            dm:userData.dm,
            obedience:userData.obedience,
            under:userData.under,
            brave:userData.brave,
            ps:userData.ps,
            technical:userData.technical,
            art:userData.art,
            communication:userData.communication,
            sports:userData.sports,
            dance:userData.dance,
            music:userData.music,
            karate:userData.karate,
            others1:userData.others1,
            others2:userData.others2,
            height:userData.height,
            weight:userData.weight,
            bmi:userData.bmi,
            achive:userData.achive

        }
        processMessage("Please Wait Submitting...");
        var url = "https://mti-apidata.onrender.com/student";
        axios.post(url, Data).then(response => {
            processMessage(userData.name +" Details Submited  ")
            console.log(response.userData);
            setUserData('');   
            setActiveStep(1);

        })
    }
    

    return (
        <div>
            <multiStepContext.Provider value={{ message, activeStep, nextStep, previousStep, userData, setUserData, finalData, SetFinalData, submitData }}>
                <Main />
            </multiStepContext.Provider>
        </div>
    );
}

export default StepContext;