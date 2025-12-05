import React, { useContext } from "react";
import { Button, Typography, Paper } from "@mui/material";
import { PhoneInTalk } from "@mui/icons-material";

import { SocketContext } from "../Context";

const cardStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  padding: "20px 25px",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  textAlign: "center",
  marginTop: "15px",
};

export default function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  if (!call.isReceivingCall || callAccepted) return null;

  return (
    <Paper elevation={10} style={cardStyle}>
      <Typography
        variant="h6"
        style={{ color: "#fff", fontWeight: 600, marginBottom: 10 }}
      >
        {call.name || "Someone"} is calling...
      </Typography>

      <Button
        onClick={answerCall}
        variant="contained"
        fullWidth
        startIcon={<PhoneInTalk />}
        style={{
          background: "linear-gradient(to right, #43cea2, #185a9d)",
          color: "#fff",
          fontWeight: 600,
          padding: "10px 0",
          borderRadius: "10px",
          fontSize: "16px",
        }}
      >
        Answer
      </Button>
    </Paper>
  );
}
