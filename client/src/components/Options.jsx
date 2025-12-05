import React, { useState, useContext } from "react";
import { Button, TextField, Typography, Paper, Container } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../Context";

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  borderRadius: "16px",
  padding: "25px",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.2)",
  maxWidth: "450px",
  margin: "0 auto",
};

export default function Options({ children }) {
  const { me, callAccepted, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container maxWidth="sm">
      <Paper elevation={10} style={cardStyle}>
        <Typography variant="h6" style={{ color: "#fff", fontWeight: 600 }}>
          Your Meeting ID
        </Typography>

        <CopyToClipboard text={me}>
          <Button
            fullWidth
            variant="contained"
            style={{
              marginTop: "15px",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Copy Your ID
          </Button>
        </CopyToClipboard>

        <Typography
          variant="h6"
          style={{ marginTop: "25px", color: "#fff", fontWeight: 600 }}
        >
          Join a Meeting
        </Typography>

        <TextField
          variant="filled"
          fullWidth
          placeholder="Enter Meeting ID"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          style={{ marginTop: "10px" }}
          InputProps={{
            style: { background: "#fff", borderRadius: 8 },
          }}
        />

        {callAccepted && !callEnded ? (
          <Button
            fullWidth
            variant="contained"
            onClick={leaveCall}
            startIcon={<PhoneDisabled />}
            style={{
              marginTop: "15px",
              background: "#ff4d4f",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Hang Up
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            onClick={() => callUser(idToCall)}
            startIcon={<Phone />}
            style={{
              marginTop: "15px",
              background: "linear-gradient(90deg, #43cea2, #185a9d)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Call
          </Button>
        )}

        {children}
      </Paper>
    </Container>
  );
}
