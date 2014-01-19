var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  	fs.createReadStream(__dirname+'/index.html').pipe(response);
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');