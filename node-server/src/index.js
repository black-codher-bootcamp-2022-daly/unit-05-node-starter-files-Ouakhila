var http = require("http"),
  fs = require("fs");

var server = http
  .createServer(function (request, response) {
    if (
      (request.method === "GET" && request.url.endsWith("index.html")) ||
      request.url.endsWith("/")
    ) {
      fs.readFile("./index.html", function (err, html) {
        if (err) {
          throw err;
        }
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
      });
    } else {
      response.writeHeader(404, { "Content-Type": "text/html" });
      response.write(`Sorry, '${request.url}' not found`);
      response.end();
    }
  })
  .listen(8080);
