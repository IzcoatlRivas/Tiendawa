const http = require("http");
const host = 'localhost';
const port = 80;
const express = require('express');
const app = express();
const routes =  require('./routes');

app.use((req,res,next)=>{
	console.log(`[GLOBAL] ${req.method} ${req.url}`);
	next();
});

app.use('/',routes);
const server = http.createServer(app);
server.listen(port,host, ()=>{
	console.log(`Server is running on http://${host}:${port}`);
});

