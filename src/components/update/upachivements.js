import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext1';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function UpAchivements1() {
    const { data, handelSubmit, previousStep,  setData } = useContext(multiStepContext);

    return (

        <div>

            <form>
                <div className='post_wrapper1'>
                    <h2>Achivements Development</h2>
                    <div className='acadamicwrapper1'>

                        <div className='inpuboxs'>

                            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 450 }, }} noValidate autoComplete="off">
                                <div>
                                    <TextField label="Achivements" multiline rows={4}
                                        value={data.achive} onChange={(e) => setData({ ...data, achive: e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" />
                                </div>
                            </Box>
                        </div>


                    </div>
                    <div>
                        <Button className='prevbtn' variant="contained" onClick={() => previousStep()} color="secondary">Previous</Button>
                        <Button className='nextbtn' variant="contained" onClick={handelSubmit} color="primary">Update</Button>


                    </div>
                </div>
            </form>
        </div>
    );
}

export default UpAchivements1;
