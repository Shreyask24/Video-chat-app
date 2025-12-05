# **Live RTC – WebRTC Video Chat App**

A modern, Google Meet–style video calling web app built using **React**, **WebRTC**, **Socket.io**, and **Simple-Peer**.  
Users can join meetings using a unique ID, preview their camera in a lobby screen, call other users in real-time.

---

## **Features**

### Google Meet–Style Lobby  
- Camera preview before joining  
- User enters name  
- “Join Meeting” button  
- Prevents entering main UI without name  

### Real-time Video Calling  
- WebRTC peer-to-peer video streaming  
- Caller & receiver video tiles  
- Responsive side-by-side layout  
- Auto-resizes based on call state  

### Meeting ID System  
- Auto-generated unique meeting/user ID  
- Single-click “Copy Your ID”  
- Another user pastes ID → joins instantly  

### Clean UI & Glassmorphism  
- Gradient background  
- Smooth rounded video cards  
- Floating call controls  
- Modern minimal design  

### Profile Page  
- User can update their name  
- Name stored in `localStorage`  

### Notifications  
- Incoming call popup  
- Accept call button  
- Auto scroll into view  

---

## **Tech Stack**

Frontend:
React, Material UI

WebRTC:
Simple-Peer (handles peer-to-peer media connection)

Realtime Signaling:
Socket.io (manages call events: callUser, answerCall, callAccepted, etc.)

Backend:
Node.js, Express, Socket.io server

Deployment:
Frontend – Netlify
Backend – Render
