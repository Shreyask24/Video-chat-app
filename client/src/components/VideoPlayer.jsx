import React, { useContext } from 'react'

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { SocketContext } from '../Context'

const VideoPlayer = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div container >

            {/* Own Video */}
            {stream && (
                <Paper style={{
                    padding: '10px',
                    border: '2px solid black',
                    margin: '10px',
                }}>
                    <Grid style={{ justifyContent: 'center', }} item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                        <video style={{ width: '550px', }} playsInline muted ref={myVideo} autoPlay />
                    </Grid>
                </Paper>
            )}

            {/* User's Video */}
            {callAccepted && !callEnded && (
                <Paper style={{
                    padding: '10px',
                    border: '2px solid black',
                    margin: '10px',
                }}>
                    <Grid style={{ justifyContent: 'center', }} item xs={12} md={6}>
                        <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                        <video style={{ width: '550px', }} playsInline ref={userVideo} autoPlay />
                    </Grid>
                </Paper>
            )}

        </div>
    )
}

export default VideoPlayer