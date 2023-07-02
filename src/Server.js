var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.writeHead(200,{'Content-type' :'text/html' })
    var parsedUrl= url.parse(req.url,true);
    const x = parseInt(parsedUrl.query.x);
    const y = parseInt(parsedUrl.query.y);

    if(parsedUrl.pathname=="/add")
    {
        const result = x + y;
        res.end(result.toString());
    }
    else if(parsedUrl.pathname=="/multiply"){
        const result = x * y;
        res.end(result.toString());
    }
    else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
}).listen(3000);