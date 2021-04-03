1 const http = require('http');
2 
3 const port = process.env.PORT || 5000;
4
5 const server = http.createServer((request, respond) => {
6         response.statusCode = 200;
7         response.setHeader('Content-Type', 'text/plain);
8         response.end('Hello World\n\nCool!');
9});
10
11 server.listen(port, (err) => {
12         if (err) {
13                 return console.log('Something went wrong ' , err);
14         }
15         console.log('Server Listening on: ${port}');
16});
17
