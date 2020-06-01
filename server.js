var express = require('express');
var jsonServer = require('json-server');


var srv = express();

srv.use(express.static('public'));

srv.use('/api', jsonServer.defaults(), jsonServer.router('database.json'));

let server = srv.listen(8080, function () {
    console.log('Server listening on port 8080');
});