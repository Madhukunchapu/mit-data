

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import StepContext, { multiStepContext } from '../stepContext';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import Acadimic1 from './acadimic';
import Emotions from './emotionala';
import Skill from './skills';
import Physical1 from './physical';
import Achivements1 from './achivements';



function Main() {

    const { activeStep, message } = useContext(multiStepContext);

    function showStep(step) {
        console.log(step);
        switch (step) {
            case 1:
                return <Acadimic1 />;
              case 2:
                return <Emotions/>;
              case 3:
                return <Skill/>;
              case 4:
                return <Physical1/>;
              case 5:
                return <Achivements1/>;
        }

    }

    return (
        <div className='maincontainer'>

            <div>
            
            <Stepper style={{ width: '95%' }} orientation="horizontal" activeStep={activeStep - 1} >

                <Step>
                    <StepLabel>Acamedics Development</StepLabel>
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
                    <StepLabel>Achievements Developments</StepLabel>
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

export default Main;