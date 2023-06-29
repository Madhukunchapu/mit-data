import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext1';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function UpEmotions() {
    const { data, nextStep, previousStep,  setData } = useContext(multiStepContext);

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
                                        value={data.am} 
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Happiness Index" fullWidth
                                        value={data.happy} 
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Decision Making" fullWidth
                                        value={data.dm} 
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Obedience" fullWidth
                                        value={data.obedience} 
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>
                        <div className='inpuboxs'>
                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Understanding" fullWidth
                                        value={data.under} onChange={(e) => setData({ ...data, under: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Brave/Coward" fullWidth
                                        value={data.brave} onChange={(e) => setData({ ...data, brave: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Problem Solving" fullWidth
                                        value={data.ps} onChange={(e) => setData({ ...data, ps: e.target.value })}
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

export default UpEmotions;
