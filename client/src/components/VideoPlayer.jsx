import React, { useContext } from "react";
import { Paper, Typography } from "@mui/material";
import { SocketContext } from "../Context";

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  width: "100%",
};

const videoCard = {
  background: "rgba(255,255,255,0.12)",
  padding: "15px",
  borderRadius: "20px",
  width: "100%",
  maxWidth: "480px",
};

const videoStyle = {
  width: "100%",
  borderRadius: "12px",
};

export default function VideoPlayer() {
  const { name, call, callAccepted, callEnded, myVideo, userVideo, stream } =
    useContext(SocketContext);

  const showRemote = callAccepted && !callEnded;

  return (
    <div style={containerStyle}>
      {/* ---- YOUR VIDEO ---- */}
      {stream && (
        <Paper elevation={6} style={videoCard}>
          <Typography
            variant="h6"
            align="center"
            style={{ color: "#fff", marginBottom: 8 }}
          >
            {name || "You"}
          </Typography>
          <video playsInline muted ref={myVideo} autoPlay style={videoStyle} />
        </Paper>
      )}

      {/* ---- REMOTE VIDEO ---- */}
      {showRemote && (
        <Paper elevation={6} style={videoCard}>
          <Typography
            variant="h6"
            align="center"
            style={{ color: "#fff", marginBottom: 8 }}
          >
            {call.name || "Caller"}
          </Typography>
          <video playsInline ref={userVideo} autoPlay style={videoStyle} />
        </Paper>
      )}
    </div>
  );
}
