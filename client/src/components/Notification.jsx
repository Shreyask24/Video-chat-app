import React, { useContext } from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { PhoneInTalk } from '@mui/icons-material';

import { SocketContext } from '../Context';

const glassCard = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '25px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginTop: '30px',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <Paper elevation={12} style={glassCard}>
                    <Typography variant="h6" style={{ color: '#fff', fontWeight: 600 }}>
                        📞 {call.name || 'Someone'} is calling...
                    </Typography>
                    <Button
                        onClick={answerCall}
                        variant="contained"
                        startIcon={<PhoneInTalk />}
                        style={{
                            background: 'linear-gradient(to right, #43cea2, #185a9d)',
                            color: '#fff',
                            fontWeight: 600,
                            padding: '10px 25px',
                            borderRadius: '10px',
                        }}
                    >
                        Answer
                    </Button>
                </Paper>
            )}
        </>
    );
};

export default Notifications;
