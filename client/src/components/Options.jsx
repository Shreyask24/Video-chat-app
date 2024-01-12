import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../Context';


const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container style={{
            width: '600px',
            margin: '35px 0',
            padding: 0,
        }}>
            <Paper style={{
                padding: '10px 20px',
                border: '2px solid black',
            }} elevation={10}>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                }} noValidate autoComplete="off">
                    <Grid style={{ width: '100%', }} container>
                        <Grid style={{ padding: 20, }} item xs={12} md={6} >
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard style={{ marginTop: 20, }} text={me}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>

                        <Grid style={{ padding: 20, }} item xs={12} md={6} >
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button style={{ marginTop: 20, }} variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button style={{ marginTop: 20, }} variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    );
};

export default Options;