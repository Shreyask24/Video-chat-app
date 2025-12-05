import React, { useContext, useEffect } from "react";
import { Typography, AppBar, Container, Button, Grid } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notification";

import { SocketContext } from "./Context";
import Lobby from "./components/Lobby";

/* ------------------- UI Style ------------------- */
const appBarStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  padding: "20px 0",
};

/* ------------------- Home Screen ------------------- */
const HomeScreen = () => {
  const navigate = useNavigate();
  const { scrollToTop } = useContext(SocketContext);

  return (
    <div
      ref={scrollToTop}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Navbar */}
      <AppBar position="static" elevation={0} style={appBarStyle}>
        <Typography
          variant="h4"
          style={{ marginLeft: 20, color: "#fff", fontWeight: 700 }}
        >
          Live RTC
        </Typography>
      </AppBar>

      {/* Content */}
      <Container maxWidth="md" style={{ marginTop: 30, marginBottom: 40 }}>
        <VideoPlayer />

        <div style={{ marginTop: 30 }}>
          <Options>
            <Notifications />
          </Options>
        </div>
      </Container>
    </div>
  );
};

/* ------------------- Main App Component ------------------- */
const App = () => {
  const { name } = useContext(SocketContext);
  const navigate = useNavigate();

  // Auto-redirect if the user has NOT set their name
  // If no name → force lobby
  useEffect(() => {
    if (!name || name.trim() === "") {
      navigate("/lobby");
    }
  }, [name, navigate]);

  return (
    <Routes>
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
