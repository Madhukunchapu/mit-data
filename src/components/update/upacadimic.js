import React, { useContext, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { multiStepContext } from './upmain';
import { multiStepContext } from '../stepContext1';
import axios from 'axios';

// import { multiStepContext } from './updatestepper';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import {  useParams } from 'react-router-dom';

function UpAcadimic1() {
    const { data, nextStep,  setData } = useContext(multiStepContext);
    const {id} = useParams(); // it use to capture value coming to url/path

    

    return (

        <div>
        
        

            <form>
                <div className='post_wrapper'>

                    <h2>Academic Development</h2>
                    <div className='acadamicwrapper1'>
                        <div className='inpuboxs'>

                            <Box sx={{ width: 300, maxWidth: '100%' }}>

                                
                                <div>
                                    <TextField label="StudentName" fullWidth
                                        value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>

                                <div>
                                    <TextField label="Roll Number" fullWidth
                                        value={data.rollnumber}  onChange={(e) => setData({ ...data, rollnumber: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                               
                                <div>
                                    <TextField label="Class" fullWidth
                                        value={data.class}onChange={(e) => setData({ ...data, class: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="English" fullWidth
                                        value={data.english} onChange={(e) => setData({ ...data, english: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Hindi" fullWidth
                                        value={data.hindi} onChange={(e) => setData({ ...data, hindi: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Telugu" fullWidth
                                        value={data.telugu} onChange={(e) => setData({ ...data, telugu: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Maths" fullWidth
                                        value={data.maths} onChange={(e) => setData({ ...data, maths: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                
                                
                            </Box>

                        </div>
                        <div className='inpuboxs'>
                            <Box sx={{ width: 300, maxWidth: '100%' }}>
                                <div>
                                    <TextField label="Science" fullWidth
                                        value={data.science} onChange={(e) => setData({ ...data, science: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Social" fullWidth
                                        value={data.social} onChange={(e) => setData({ ...data, social: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Environmenntal Science" fullWidth
                                        value={data.es} onChange={(e) => setData({ ...data, es: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="ICT" fullWidth
                                        value={data.ict}onChange={(e) => setData({ ...data,ict : e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Robotics" fullWidth
                                        value={data.robotics} onChange={(e) => setData({ ...data, robotics: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>


                                <div>
                                    <TextField label="General Knowledge" fullWidth
                                        value={data.gk} onChange={(e) => setData({ ...data, gk: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="Value Education" fullWidth
                                        value={data.ve} onChange={(e) => setData({ ...data, ve: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>
                        <div className='inpuboxs'>
                            <Box sx={{ width: 300, maxWidth: '100%' }}>

                                <div>
                                    <TextField label="Life Skills" fullWidth
                                        value={data.skills} onChange={(e) => setData({ ...data, skills: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="IIT-Maths" fullWidth
                                        value={data.iitm} onChange={(e) => setData({ ...data, iitm: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="IIT-Physics" fullWidth
                                        value={data.iitp} onChange={(e) => setData({ ...data, iitp: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="IIT-Chemistry" fullWidth
                                        value={data.iitc} onChange={(e) => setData({ ...data, iitc: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                
                                <div>
                                    <TextField label="IIT-Reasoning" fullWidth
                                        value={data.iitr} onChange={(e) => setData({ ...data, iitr: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="NEET-Biology" fullWidth
                                        value={data.neetb} onChange={(e) => setData({ ...data, neetb: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                                <div>
                                    <TextField label="NEET-Zoology" fullWidth
                                        value={data.neetz} onChange={(e) => setData({ ...data, neetz: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div>
            <Link  to="/personal"><Button  variant="contained"  color="secondary">Back</Button></Link>

                        <Button className='nextbtn' variant="contained" onClick={() => nextStep()} color="primary">Next</Button><br />

                    </div>
                </div>
            </form>
    
        </div>
    );
}

export default UpAcadimic1;
