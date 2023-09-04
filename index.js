const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const readline = require("readline");
const os = require('os');

const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const time = `${month}-${day}-${year}-${hours}-${minutes}`;

let request = 0;
function getIp() {
    const networkInterfaces = os.networkInterfaces();
    let ip;
    Object.keys(networkInterfaces).forEach((interfaceName) => {
      const interfaces = networkInterfaces[interfaceName];
      for (let i = 0; i < interfaces.length; i++) {
        const iface = interfaces[i];
        if (iface.family === 'IPv4' && !iface.internal) {
          ip = iface.address;
          break;
        }
      }
    });
    return ip;
}

function getSenderIp(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

const app = express();
app.use(bodyParser.json({extended: true}));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleRequest(req, res) {
  try {
    request++;
    console.log(`[+] Request number ${request} received from ${getSenderIp(req)}`);
    fs.writeFileSync(`log_${time}.txt`, req.body.content);
    res.sendStatus(201);
  } catch (e) {
    console.log(`[-] Failed to process request: ${e}`);
    res.sendStatus(500)
  }
}

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`[+] Listening on port ${port}, Ip: ${getIp()}, use ^C to exit`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`[-] Port ${port} is already in use. Please enter a new port`);
      rl.question("> Enter the port to use: ", function(newPort) {
        startServer(newPort);
      });
    } else {
      console.error(`[-] Failed to start server on port ${port}: ${error}`);
      rl.close();
    }
  });
  
  app.post("/", handleRequest);
}

rl.question("> Enter the port to use: ", function(port) {
  startServer(port);
});
