1 // oh Yeah!
2 const http = require('http');
3 
4 const port = process.env.PORT || 5000;
5
6 const server = http.createServer((request, response) => {
7         response.statusCode = 200;
8         response.setHeader('Content-Type', 'text/plain');
9         response.end('Hello World\n\n\nYou Guys Rock!);
10});
11
12 server.listening(port, (err) => {
13         if (err){
14            return console.log('Somthing is wrong shut the lights');
15     }
16     console.log('Server Listening on : ${port}');
17}
