var json = require('express');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/desafio', function(req, res) {
    res.render('desafio/desafio.ejs')
});

app.get('/desafio/nova-tentativa', function(req, res) {
    res.render('desafio/nova_tentativa.ejs')
});

app.post('/desafio/resultado', function(req, res) {
    var querystring = require('querystring');
    var data = '';

    req.on("data", function(chunk) {
        data += chunk;
    });

    req.on("end", function() {
        json = querystring.parse(data);

        if(json.classe == 3 && json.heranca == 3 && json.metodo == 3) {
            res.render('desafio/resultado.ejs');
        } else {
            res.redirect('/desafio/nova-tentativa');
        }
    });
})

app.get('/', function(req, res) {
    res.redirect('/desafio');
});

app.listen(3000, function() {
    console.log('Desafio Iniciado. Acesse o endereço http://localhost:3000/desafio');
});