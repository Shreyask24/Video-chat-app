import React, { useContext } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { SocketContext } from '../Context';

const videoContainerStyle = {
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    padding: '20px',
    margin: '20px',
    width: '100%',
    maxWidth: '600px',
};

const videoStyle = {
    width: '100%',
    borderRadius: '12px',
};

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            style={{
                width: '100vw',
                minHeight: '100vh',
                padding: '40px 20px',
                background: 'linear-gradient(to right, #667eea, #764ba2)',
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* Own Video */}
            {stream && (
                <Paper elevation={6} style={videoContainerStyle}>
                    <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        style={{ color: '#fff', fontWeight: 600 }}
                    >
                        {name || 'Your Name'}
                    </Typography>
                    <video playsInline muted ref={myVideo} autoPlay style={videoStyle} />
                </Paper>
            )}

            {/* User's Video */}
            {callAccepted && !callEnded && (
                <Paper elevation={6} style={videoContainerStyle}>
                    <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        style={{ color: '#fff', fontWeight: 600 }}
                    >
                        {call.name || 'Caller'}
                    </Typography>
                    <video playsInline ref={userVideo} autoPlay style={videoStyle} />
                </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;
