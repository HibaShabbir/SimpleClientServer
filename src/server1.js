var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-type' :'text/html' })
   // var q= url.parse(req.url,true).query;
    res.write(req.url);
    res.end();
}).listen(8081);