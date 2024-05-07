
/*
const http = require('http');
const app = http.createServer( (req,res) => {  
    res.end('HELLO')
});
*/
const express = require('express')
const app = express();
const PORT = 3000;

/* get, post, put, delete */
app.get('/', (req,res) => {
    res.send('Home page')
})
app.get('/gallery', (req,res) => {
    res.send('Welcome to gallery')
})
app.listen(PORT,() => console.log(`${PORT} portserver is running`) )  // 실행명령어//

