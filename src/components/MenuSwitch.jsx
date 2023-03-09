import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Box from '@mui/material/Box';
import ResponsiveAppBar from './ResponsiveAppBar';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';

function GetMenuItems() {


    return (

        <Grid container spacing={2}>
            <Grid item sm={6}>
                <Box m={2} pt={3} height={200} width={800} >

                    <FormControl>

                        Count: <TextField sx={{ b: 4 }} id="person-count" label="" variant="filled" />

                        Diet Choice:<ToggleButtonGroup sx={{ b: 4 }}
                            color="primary"
                            //   value={alignment}
                            exclusive
                            //   onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="veg">VEG</ToggleButton>
                            <ToggleButton value="any">VEG and NON-VEG</ToggleButton>
                    

                        </ToggleButtonGroup>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box textAlign="center" >
                    Recommended Quantities:
                </Box>
            </Grid>
        </Grid>




    );
}

export default GetMenuItems;