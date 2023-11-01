import React from 'react'

import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField } from '@mui/material';



import { AlertCircle, Calendar, FileText, Globe } from 'react-feather';
function Landing() {
    return (

        <>
            <div className="app" style={{
                paddingLeft: ' 50px', paddingRight: '50px'
                , backgroundColor: 'rgb(2, 46, 44)'
            }}>

                <div className='fullpage'>
                    {/* first section */}
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ color: 'white' }}>

                        <Grid item xs={6}>
                            <h1 className='heading mt-5' style={{ fontSize: '90px', fontWeight: 'bolder' }}>KENKO</h1>
                            <h3 className='mt-4'>All-In-One  Healthcare Plans Starting</h3>
                            <div>
                                <p className='subtitle1' style={{
                                    fontSize: '90px',
                                    color: ' rgb(87, 143, 87)',
                                    fontWeight: 'bold'
                                }}>@ ₹6<span className='para-span1' style={{
                                    color: 'white',
                                    fontSize: '40px'
                                }}>/day</span></p>
                                <p className='subtitle2' style={{
                                    fontSize: '25px',
                                    fontWeight: 'bold'
                                }}>Trusted by over <span className='para-span2' style={{ color: 'yellow' }}>3 Lakh </span>subscribers</p>

                                <div className='details' style={{
                                    marginTop: '90px',
                                    display: 'flex',
                                    gap: '10rem'
                                }}>
                                    <div className='plans'>
                                        <Calendar size={40} />
                                        <p className='details-para' style={{
                                            fontSize: '17px',
                                            marginTop: '20px'
                                        }}>Monthly Health Plans</p>
                                    </div>
                                    <div className='plans'>
                                        <Globe size={40} />
                                        <p className='details-para'  style={{
                                            fontSize: '17px',
                                            marginTop: '20px',
                                            
                                        }}>Total Coverage</p>
                                    </div>
                                    <div className='plans '>
                                        <FileText size={40} />
                                        <p className='details-para'  style={{
                                            fontSize: '17px',
                                            marginTop: '20px'
                                        }}>Benefits from Day 0</p>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>

                        {/* Second section */}
                        <Grid item xs={5} style={{ paddingTop: '50px' }}  >
                                       
                            <div className="login-card ms-5" style={{
                                backgroundColor: 'white',
                                width: ' 430px',
                                borderRadius: '15px'
                            }} >

                                <div className="form" style={{
                                    paddingTop: ' 15px'
                                    , paddingBottom: '10px',
                                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                                }}>

                                    <div className='text-fields' style={{ margin: '20px' }}>

                                        <div className='inputs' style={{ marginBottom: '20px' }}>
                                            <TextField
                                                fullWidth
                                                required
                                                id="outlined-required"
                                                label="Fullname"

                                            />
                                        </div>
                                        <div className='inputs' style={{ marginBottom: '20px' }}>
                                            <TextField
                                                fullWidth

                                                id="outlined-required"
                                                label="Date of Birth"

                                            />
                                        </div>
                                        <div className='inputs' style={{ marginBottom: '20px' }}>
                                            <TextField

                                                // margin='normal'
                                                required
                                                fullWidth

                                                label="Email Id"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                            />
                                        </div>
                                        <div className='inputs' style={{ marginBottom: '20px' }}>
                                            <TextField

                                                // margin='normal'
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                            />
                                        </div>
                                        <div className='inputs' style={{ marginBottom: '20px' }}>
                                            <TextField

                                                // margin='normal'
                                                required
                                                fullWidth
                                                name="pincode"
                                                label="Pincode"
                                                type="text"
                                                id="outline-required"
                                                autoComplete="current-password"
                                            />
                                        </div>
                                      
                                    </div>

                                    <Stack spacing={2}>
                                        {/* checkbox */}

                                        <FormControlLabel className='check' style={{ color: 'grey', padding: '10px' }} control={<Checkbox style={{
                                            color: 'rgb(2, 46, 44)'
                                        }} defaultChecked />} label='Send me updates on WhatsApp' />

                                        {/* button */}

                                        <Button className='btn' type='submit' style={{ backgroundColor: 'rgb(196, 196, 16)', color: 'rgb(2, 46, 44)' }} variant="contained">Signin</Button>

                                        <Button className='btn-info' style={{
                                            fontSize: '13px',
                                            marginBottom: '10px'
                                        }} variant="text">Already have an account?Login</Button>

                                    </Stack>

                                    <div className='enquiry'  >
                                        <p style={{
                                            color: 'black', fontSize: '12px', textAlign: 'center'

                                        }}>
                                            <AlertCircle size={10} /> Here through employer?Contact your HR to get started
                                        </p>

                                    </div>

                                </div>




                            </div>


                        </Grid>


                    </Grid>

                </div>

            </div>
        </>

    )
}

export default Landing