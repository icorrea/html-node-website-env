const dotenv = require('dotenv').config();
const express = require("express");
const compression = require("compression");
const port = process.env.PORT || 8080;
const portSSL = process.env.PORT_SSL || 40443;
const https = require("https");
const fs = require("fs");
const app = express();

app.use(compression());
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});

// Enable ssl
const options = {
  key: fs.readFileSync("./cert/localhost.key"),
  cert: fs.readFileSync("./cert/localhost.crt"),
};

https.createServer(options, app).listen(portSSL, function (req, res) {
  console.log(`https://localhost:${portSSL}`);
});


