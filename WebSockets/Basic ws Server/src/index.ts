// Import the WebSocketServer
import { WebSocketServer } from "ws";

// Create a websocket server
const wss = new WebSocketServer({ port: 8080 });

// Create an event handler
wss.on("connection", function(socket) {
    console.log("user connected");
    socket.send("hello");
});