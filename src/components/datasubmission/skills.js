import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Skill() {
    const { nextStep, previousStep, userData, setUserData } = useContext(multiStepContext);

    return (

        <div>
            <Link to="/"><input className="back-btn" value="Back" /></Link>

            <form>
                <div className='post_wrapper'>
                    <h2>Emotonal Development</h2>
                    <div className='acadamicwrapper1'>

                        <div className='inpuboxs'>

                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Technical" fullWidth
                                        value={userData['technical']} onChange={(e) => setUserData({ ...userData, "technical": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Art/Craft" fullWidth
                                        value={userData['art']} onChange={(e) => setUserData({ ...userData, "art": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Communication" fullWidth
                                        value={userData['communication']} onChange={(e) => setUserData({ ...userData, "communication": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Sports" fullWidth
                                        value={userData['sports']} onChange={(e) => setUserData({ ...userData, "sports": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Dance" fullWidth
                                        value={userData['dance']} onChange={(e) => setUserData({ ...userData, "dance": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>

                        <div className='inpuboxs'>

                            <Box sx={{ width: 400, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Music" fullWidth
                                        value={userData['music']} onChange={(e) => setUserData({ ...userData, "music": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Karate" fullWidth
                                        value={userData['karate']} onChange={(e) => setUserData({ ...userData, "karate": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Others-I" fullWidth
                                        value={userData['others1']} onChange={(e) => setUserData({ ...userData, "others1": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Others-II" fullWidth
                                        value={userData['others2']} onChange={(e) => setUserData({ ...userData, "others2": e.target.value })}
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

export default Skill;
