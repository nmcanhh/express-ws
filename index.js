const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wws = new WebSocket.server({ server: server });

app.get("/", (req, res) => {
  res.send("Hello, MC");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
