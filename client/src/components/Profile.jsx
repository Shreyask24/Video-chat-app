import React, { useContext, useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { SocketContext } from "../Context";
import { useNavigate } from "react-router-dom";

const profileCard = {
  background: "rgba(255,255,255,0.12)",
  borderRadius: "20px",
  padding: "35px",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  width: "100%",
  maxWidth: "420px",
  margin: "60px auto",
  textAlign: "center",
};

export default function Profile() {
  const { name, updateName } = useContext(SocketContext);
  const [tempName, setTempName] = useState(name);

  const navigate = useNavigate();

  const save = () => {
    updateName(tempName);
    navigate("/");
  };

  return (
    <Paper elevation={10} style={profileCard}>
      <Typography variant="h4" style={{ color: "#fff", fontWeight: 700 }}>
        Edit Profile
      </Typography>

      <TextField
        label="Your Full Name"
        variant="filled"
        fullWidth
        style={{ marginTop: "25px" }}
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
      />

      <Button
        onClick={save}
        variant="contained"
        fullWidth
        style={{
          marginTop: "25px",
          padding: "12px",
          background: "linear-gradient(90deg, #667eea, #764ba2)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "10px",
        }}
      >
        Save Changes
      </Button>
    </Paper>
  );
}
