var http = require('http');
var url = require('url');
function reverse(s){
    return s.split("").reverse().join("");
}
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
	
	if(pathname === "/ping"){
		response.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*'});
		response.write("OK");
//		response.write(str1+"");	
		response.end();
	}
	
	else if(pathname === "/reverse/string"){
		response.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*'});
		var str1 = url.parse(request.url).query;
		response.write(reverse(str1.slice(4)));
		response.end();	
	}
	else if(pathname === "/reverse/words"){
		response.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*'});
		var str1 = url.parse(request.url).query;
		var w = str1.slice(4).replace("%2C",",").split("+");
		console.log(w);
		var output = [];
		w.forEach(function(wo){
			output.push(reverse(wo));
		});
		console.log(output.join(" "));
		response.write(output.join(" "));
		response.end();	
	}
}).listen(8088);

// Console will print the message
console.log('Server running at http://127.0.0.1:8088/');
