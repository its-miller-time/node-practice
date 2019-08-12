// Without "./" node looks in its global module folder
const http = require('http');

function handleReqAndRes(req, res) {
    const timeStamp = new Date();
    res.end(`<h1>${timeStamp}</h1>`);
};

//What is a server?
//A server is a piece of code
// or a computer running a piece of code that does something useful
// for YOU. Usually, servers store data and often manipulate the data
const server = http.createServer(handleReqAndRes);

// http.createServer() accepts a function and returns a "server"
// When the server recives a Request:
// 1. It puts together *most* of a Response
// 2. It calls *your* function and passes it the Request and Response

server.listen(3000);
