import React, { useState, useContext } from "react";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../Context";

const boxStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  padding: "25px",
  backdropFilter: "blur(14px)",
  width: "100%",
};

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <Container maxWidth="xs">
      <Paper elevation={12} style={boxStyle}>
        {/* ---- Copy ID ---- */}
        <Typography variant="h6" style={{ color: "#fff", fontWeight: 600 }}>
          Your Meeting ID
        </Typography>

        <CopyToClipboard text={me}>
          <Button
            variant="contained"
            fullWidth
            style={{
              marginTop: 12,
              background: "linear-gradient(to right, #667eea, #764ba2)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Copy Your ID
          </Button>
        </CopyToClipboard>

        {/* ---- Enter ID ---- */}
        <Typography
          variant="h6"
          style={{ color: "#fff", fontWeight: 600, marginTop: 20 }}
        >
          Join a Meeting
        </Typography>

        <TextField
          label="Enter Meeting ID"
          variant="filled"
          fullWidth
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          InputProps={{
            style: { background: "#ffffffcc", borderRadius: 8 },
          }}
          style={{ marginTop: 10 }}
        />

        {/* CALL / HANG UP */}
        {callAccepted && !callEnded ? (
          <Button
            variant="contained"
            fullWidth
            onClick={leaveCall}
            startIcon={<PhoneDisabled />}
            style={{
              marginTop: 15,
              backgroundColor: "#ff4d4f",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Hang Up
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            onClick={() => callUser(idToCall)}
            startIcon={<Phone />}
            style={{
              marginTop: 15,
              background: "linear-gradient(to right, #43cea2, #185a9d)",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Call
          </Button>
        )}

        {/* Notifications */}
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
