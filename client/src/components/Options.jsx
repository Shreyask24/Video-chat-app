import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../Context';

const glassStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '30px',
    width: '100%',
};

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container
            maxWidth="md"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper elevation={12} style={glassStyle}>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={4}>
                        {/* Account Info */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom style={{ color: '#fff', fontWeight: '600' }}>
                                🎯 Account Info
                            </Typography>
                            <TextField
                                label="Your Name"
                                variant="filled"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputProps={{
                                    style: { background: '#ffffffcc', borderRadius: 8 },
                                }}
                            />
                            <CopyToClipboard text={me} style={{ marginTop: '20px', display: 'block' }}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    style={{
                                        marginTop: '15px',
                                        background: 'linear-gradient(to right, #667eea, #764ba2)',
                                        color: '#fff',
                                        fontWeight: 600,
                                    }}
                                >
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>

                        {/* Make a Call */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom style={{ color: '#fff', fontWeight: '600' }}>
                                📞 Make a Call
                            </Typography>
                            <TextField
                                label="Enter ID to call"
                                variant="filled"
                                fullWidth
                                value={idToCall}
                                onChange={(e) => setIdToCall(e.target.value)}
                                InputProps={{
                                    style: { background: '#ffffffcc', borderRadius: 8 },
                                }}
                            />
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={leaveCall}
                                    style={{
                                        marginTop: '15px',
                                        backgroundColor: '#ff4d4f',
                                        color: '#fff',
                                        fontWeight: 600,
                                    }}
                                    startIcon={<PhoneDisabled />}
                                >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => callUser(idToCall)}
                                    style={{
                                        marginTop: '15px',
                                        background: 'linear-gradient(to right, #43cea2, #185a9d)',
                                        color: '#fff',
                                        fontWeight: 600,
                                    }}
                                    startIcon={<Phone />}
                                >
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                    {children}
                </form>
            </Paper>
        </Container>
    );
};

export default Options;
