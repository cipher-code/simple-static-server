const httpPort = 80;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(httpPort);
console.log("Simple Static Server Listening on port " + httpPort);