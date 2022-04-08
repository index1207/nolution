const express = require('express') // 웹서버 구축
const router = express.Router() //
const http = require('http') // http프로토콜
const path = require('path') // 디렉토리

const mysql = require('mysql') // 유저 관리

const app = express();

app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './', 'index.html'));
})

http.createServer(app).listen(3001, function() {
    console.log('express webserver start ! :: 3001');
})