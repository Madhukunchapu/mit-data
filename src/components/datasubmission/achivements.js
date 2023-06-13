import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Achivements1() {
    const { submitData, previousStep, userData, setUserData } = useContext(multiStepContext);

    return (

        <div>
            <Link to="/"><input className="back-btn" value="Back" /></Link>

            <form>
                <div className='post_wrapper1'>
                    <h2>Achivements Development</h2>
                    <div className='acadamicwrapper1'>

                        <div className='inpuboxs'>

                            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 500 }, }} noValidate autoComplete="off">
                                <div>
                                    <TextField label="Achivements" multiline rows={4}
                                        value={userData['achive']} onChange={(e) => setUserData({ ...userData, "achive": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" required />
                                </div>
                            </Box>
                        </div>


                    </div>
                    <div>
                        <Button className='prevbtn' variant="contained" onClick={() => previousStep()} color="secondary">Previous</Button>
                        <Button className='nextbtn' variant="contained" onClick={submitData} color="primary">submit</Button>


                    </div>
                </div>
            </form>
        </div>
    );
}

export default Achivements1;
