import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Physical1() {
    const{ nextStep, previousStep,  userData, setUserData}= useContext(multiStepContext);

    return (

        <div>

            <form>
                <div className='post_wrapper1'>
                    <h2>Skills/Talent Development</h2>
                    <div className='acadamicwrapper2'>

                        <div className='inpuboxs'>

                            <Box sx={{ width: 450 }}>

                                <div>
                                    <TextField label="Height" fullWidth
                                        value={userData['height']} onChange={(e) => setUserData({ ...userData, "height": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Weight" fullWidth
                                        value={userData['weight']} onChange={(e) => setUserData({ ...userData, "weight": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                
                                <div>
                                    <TextField label="Body Mass Index" fullWidth
                                        value={userData['bmi']} onChange={(e) => setUserData({ ...userData, "bmi": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                
                                </Box>
                                </div>
                                
                        
                    </div>
                    <div>
                    <Button className='prevbtn' variant="contained"  onClick={()=>previousStep()}  color="secondary">Previous</Button>
                    <Button className='nextbtn' variant="contained" onClick={()=>nextStep()}  color="primary">Next</Button>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Physical1;
