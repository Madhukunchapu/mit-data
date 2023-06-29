import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Emotions() {
    const {  nextStep, previousStep, userData, setUserData } = useContext(multiStepContext);

    return (

        <div>

            <form>
                <div className='post_wrapper'>
                    <h2>Emotional Development</h2>
                    <div className='acadamicwrapper2'>

                        <div className='inpuboxs'>

                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Anger Management" fullWidth
                                        value={userData['am']} onChange={(e) => setUserData({ ...userData, "am": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Happiness Index" fullWidth
                                        value={userData['happy']} onChange={(e) => setUserData({ ...userData, "happy": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Decision Making" fullWidth
                                        value={userData['dm']} onChange={(e) => setUserData({ ...userData, "dm": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Obedience" fullWidth
                                        value={userData['obedience']} onChange={(e) => setUserData({ ...userData, "obedience": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>
                        <div className='inpuboxs'>
                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Understanding" fullWidth
                                        value={userData['under']} onChange={(e) => setUserData({ ...userData, "under": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Brave/Coward" fullWidth
                                        value={userData['brave']} onChange={(e) => setUserData({ ...userData, "brave": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Problem Solving" fullWidth
                                        value={userData['ps']} onChange={(e) => setUserData({ ...userData, "ps": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>


                            </Box>

                        </div>

                    </div>
                    <div>
                        <Button className='prevbtn' variant="contained" onClick={() => previousStep()} color="secondary">Previous</Button>
                        <Button className='nextbtn' variant="contained" onClick={() => nextStep()} color="primary">Next</Button>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Emotions;
