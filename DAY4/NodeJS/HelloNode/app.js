console.log("Hello World!");
//Document and setTimeout are not available with node
//node Runs on google's v8 engine
// One of the fastest engines to run javascript.
const http = require("http");
const hostname = "127.0.0.1";
const port = 3500;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/HTML");
    res.end("<h1>Hello World!<h1>");
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});