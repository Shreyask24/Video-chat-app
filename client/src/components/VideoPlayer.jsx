import React, { useContext } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { SocketContext } from "../Context";

const videoBox = {
  background: "rgba(255,255,255,0.12)",
  padding: "20px",
  borderRadius: "20px",
  backdropFilter: "blur(14px)",
  width: "100%",
};

const videoStyle = {
  width: "100%",
  borderRadius: "12px",
};

export default function VideoPlayer() {
  const { name, call, callAccepted, callEnded, myVideo, userVideo, stream } =
    useContext(SocketContext);

  const hasRemote = callAccepted && !callEnded;

  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", margin: 0 }}
    >
      {/* -----------------------------------------
          YOUR VIDEO (Centered when single)
      ------------------------------------------ */}
      {stream && (
        <Grid item xs={12} md={hasRemote ? 6 : 6}>
          <Paper elevation={8} style={videoBox}>
            <Typography
              variant="h6"
              align="center"
              style={{ color: "#fff", fontWeight: 600, marginBottom: 8 }}
            >
              {name || "You"}
            </Typography>

            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={videoStyle}
            />
          </Paper>
        </Grid>
      )}

      {/* -----------------------------------------
          REMOTE VIDEO (Appears when call accepted)
      ------------------------------------------ */}
      {hasRemote && (
        <Grid item xs={12} md={6}>
          <Paper elevation={8} style={videoBox}>
            <Typography
              variant="h6"
              align="center"
              style={{ color: "#fff", fontWeight: 600, marginBottom: 8 }}
            >
              {call.name || "Caller"}
            </Typography>

            <video playsInline ref={userVideo} autoPlay style={videoStyle} />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}
