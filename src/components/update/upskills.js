import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext1';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function UpSkill() {
    const {data, nextStep, previousStep,  setData } = useContext(multiStepContext);

    return (

        <div>

            <form>
                <div className='post_wrapper'>
                    <h2>Skills/Talent Development</h2>
                    <div className='acadamicwrapper2'>

                        <div className='inpuboxs'>

                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Technical" fullWidth
                                        value={data.technical} onChange={(e) => setData({ ...data, technical: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Art/Craft" fullWidth
                                        value={data.art} onChange={(e) => setData({ ...data, art: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Communication" fullWidth
                                        value={data.communication} onChange={(e) => setData({ ...data, communication: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Sports" fullWidth
                                        value={data.sports} onChange={(e) => setData({ ...data, sports: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Dance" fullWidth
                                        value={data.dance} onChange={(e) => setData({ ...data, dance: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>

                        <div className='inpuboxs'>

                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Music" fullWidth
                                        value={data.music} onChange={(e) => setData({ ...data, music: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Karate" fullWidth
                                        value={data.karate} onChange={(e) => setData({ ...data, karate: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Others-I" fullWidth
                                        value={data.others1} onChange={(e) => setData({ ...data, others1: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Others-II" fullWidth
                                        value={data.others2} onChange={(e) => setData({ ...data, others2: e.target.value })}
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

export default UpSkill;
