import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Acadimic1() {
    const { activeStep, nextStep, userData, setUserData } = useContext(multiStepContext);

    return (

        <div>
            <Link to="/"><input className="back-btn" value="Back" /></Link>

            <form>
                <div className='post_wrapper'>

                    <h2>Academic Development</h2>
                    <div className='acadamicwrapper1'>
                        <div className='inpuboxs'>

                            <Box sx={{ width: 300, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="StudentName" fullWidth
                                        value={userData['name']} onChange={(e) => setUserData({ ...userData, "name": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Roll Number" fullWidth
                                        value={userData['rollnumber']} onChange={(e) => setUserData({ ...userData, "rollnumber": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="student Photo" 
                                        value={userData['photo']} onChange={(e) => setUserData({ ...userData, "photo": e.target.value })}
                                        margin="normal" type="file" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Class" fullWidth
                                        value={userData['class']} onChange={(e) => setUserData({ ...userData, "class": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="English" fullWidth
                                        value={userData['english']} onChange={(e) => setUserData({ ...userData, "english": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Hindi" fullWidth
                                        value={userData['hindi']} onChange={(e) => setUserData({ ...userData, "hindi": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Telugu" fullWidth
                                        value={userData['telugu']} onChange={(e) => setUserData({ ...userData, "telugu": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Maths" fullWidth
                                        value={userData['maths']} onChange={(e) => setUserData({ ...userData, "maths": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                
                                
                            </Box>

                        </div>
                        <div className='inpuboxs'>
                            <Box sx={{ width: 300, maxWidth: '100%' }}>
                                <div>
                                    <TextField label="Science" fullWidth
                                        value={userData['science']} onChange={(e) => setUserData({ ...userData, "science": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Social" fullWidth
                                        value={userData['social']} onChange={(e) => setUserData({ ...userData, "social": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Environmenntal Science" fullWidth
                                        value={userData['es']} onChange={(e) => setUserData({ ...userData, "es": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="ICT" fullWidth
                                        value={userData['ict']} onChange={(e) => setUserData({ ...userData, "ict": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Robotics" fullWidth
                                        value={userData['robotics']} onChange={(e) => setUserData({ ...userData, "robotics": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>


                                <div>
                                    <TextField label="General Knowledge" fullWidth
                                        value={userData['gk']} onChange={(e) => setUserData({ ...userData, "gk": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Value Education" fullWidth
                                        value={userData['ve']} onChange={(e) => setUserData({ ...userData, "ve": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>
                        <div className='inpuboxs'>
                            <Box sx={{ width: 300, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Life Skills" fullWidth
                                        value={userData['skills']} onChange={(e) => setUserData({ ...userData, "skills": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="IIT-Maths" fullWidth
                                        value={userData['iitm']} onChange={(e) => setUserData({ ...userData, "iitm": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="IIT-Physics" fullWidth
                                        value={userData['iitp']} onChange={(e) => setUserData({ ...userData, "iitp": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="IIT-Chemistry" fullWidth
                                        value={userData['iitc']} onChange={(e) => setUserData({ ...userData, "iitc": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                
                                <div>
                                    <TextField label="IIT-Reasoning" fullWidth
                                        value={userData['iitr']} onChange={(e) => setUserData({ ...userData, "iitr": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="NEET-Biology" fullWidth
                                        value={userData['neetb']} onChange={(e) => setUserData({ ...userData, "neetb": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="NEET-Zoology" fullWidth
                                        value={userData['neetz']} onChange={(e) => setUserData({ ...userData, "neetz": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div>
                        <Button className='nextbtn' variant="contained" onClick={() => nextStep()} color="primary">Next</Button><br />

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Acadimic1;
