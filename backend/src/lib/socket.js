import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getRecieverSocketId(userId) {
    return userSocketMap[userId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user is connected", socket.id);

  const userId = socket.handshake.query.userId;
  try {
    if (userId && isValidUserId(userId)) { // Add validation for userId
      userSocketMap[userId] = socket.id;
    } else {
      console.error("Invalid user ID:", userId);
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  } catch (error) {
    console.error("Error handling connection:", error);
    // Handle errors appropriately (e.g., emit an error event to the client)
  }

  socket.on("disconnect", () => {
    console.log("A user is disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Function to validate user ID format (replace with your validation logic)
function isValidUserId(userId) {
  // Implement your user ID validation logic here
  return true; // Replace with actual validation
}

export { io, app, server };