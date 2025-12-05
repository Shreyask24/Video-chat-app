import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { SocketContext } from "../Context";

const cardStyle = {
  width: "90%",
  maxWidth: "420px",
  padding: "30px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(14px)",
  color: "#fff",
  textAlign: "center",
  marginTop: "40px",
};

export default function Lobby() {
  const { updateName, name } = useContext(SocketContext);
  const [tempName, setTempName] = useState(name || "");
  const videoRef = useRef(null);

  // Load camera preview
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      });
  }, []);

  const joinMeeting = () => {
    if (tempName.trim() === "") {
      alert("Please enter your name!");
      return;
    }
    updateName(tempName);

    window.location.href = "/"; // go to main app
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #667eea, #764ba2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <Paper elevation={10} style={cardStyle}>
        <Typography variant="h4" style={{ fontWeight: 700 }}>
          Join Meeting
        </Typography>

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            marginTop: "20px",
            width: "100%",
            borderRadius: "12px",
          }}
        />

        <TextField
          label="Your Name"
          variant="filled"
          fullWidth
          style={{ marginTop: "25px" }}
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={joinMeeting}
          style={{
            marginTop: "25px",
            background: "linear-gradient(90deg, #43cea2, #185a9d)",
            padding: "12px",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Join Meeting
        </Button>
      </Paper>
    </div>
  );
}
