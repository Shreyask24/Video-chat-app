import React, { useContext } from 'react';
import { Typography, AppBar, Container } from '@mui/material';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notification';
import { SocketContext } from './Context';

const appBarStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  padding: '20px 0',
};

const App = () => {
  const { scrollToTop } = useContext(SocketContext);

  return (
    <div
      ref={scrollToTop}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <AppBar position="static" elevation={0} style={appBarStyle}>
        <Typography
          variant="h3"
          align="center"
          style={{
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#fff',
            letterSpacing: '2px',
          }}
        >
          Live RTC
        </Typography>
      </AppBar>

      <Container
        maxWidth="lg"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          padding: '40px 20px',
        }}
      >
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </Container>
    </div>
  );
};

export default App;
