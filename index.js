var http = require('http');

http.createServer(function(req,res) {
    res.redirect('/desafio');
}).listen(3000);