

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import stepContext1, { multiStepContext } from '../stepContext1';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import UpAcadimic1 from './upacadimic';
import UpEmotions from './upemotionala';
import UpSkill from './upskills';
import UpPhysical1 from './upphysical';
import UpAchivements1 from './upachivements';



function UpMain() {

    const { activeStep, message } = useContext(multiStepContext);

    function showStep(step) {
        console.log(step);
        switch (step) {
            case 1:
                return <UpAcadimic1/>;
              case 2:
                return <UpEmotions/>;
              case 3:
                return <UpSkill/>;
              case 4:
                return <UpPhysical1/>;
              case 5:
                return <UpAchivements1/>;
        }

    }

    return (
        <div className='maincontainer'>

            <div>
            
            <Stepper style={{ width: '95%' }} orientation="horizontal" activeStep={activeStep - 1} >

                <Step>
                    <StepLabel>Acamedic Development</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Emotional Development</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Skills/Talent Development</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Physical Development</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Achivements Developments</StepLabel>
                </Step>
            </Stepper>
            <h5 className="text-center text-danger">{message}</h5>

            {showStep(activeStep)}
        
            </div>
            <div>

            </div>
        </div>


    );
}

export default UpMain;