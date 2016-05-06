var http = require("http");  
var url = require("url");
var path = require("path");
var fs=require('fs');
var  DIR = 'app';
http.createServer(function(request, response) {  
	var pathname = url.parse(request.url).pathname;
    var realPath = path.join(DIR, pathname); 
   fs.readFile(realPath, "binary", function (err, file) {
      
                     response.writeHead(200, {
                         'Content-Type': 'text/html'
                     });
                    response.write(file+"", "binary");
                     response.end();
             });

}).listen(8888);  

console.log('server started');  
