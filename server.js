const express = require('express')
const http = require('http')
const path = require('path')

let app = express();

app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './', 'index.html'));
})

http.createServer(app).listen(3001, function() {
    console.log('express webserver start ! :: 3001');
})