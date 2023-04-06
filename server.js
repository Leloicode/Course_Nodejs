const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    console.log('run request');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello would!</h1>');
    res.write('<h3>xin chào</h3>');
    res.end();

})
server.listen(port, 'localhost', () => {
    console.log('NodeJs server listening on port: 3000');
});