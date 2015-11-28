/**
 * Created by perry on 15/9/25.
 */

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/plain'});
    res.write('hello Nodejs');
    res.end();
}).listen(2015);
