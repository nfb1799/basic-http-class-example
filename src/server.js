const http = require('http');
const fs = require('fs'); // File system library

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
console.log(index);

const onRequest = (request, response) => {
  console.log(request.url);

  response.writeHead(200, { 'Content-Type': 'text/html' }); // Setting the headers
  response.write(index);
  response.end();
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1:${port}`);
