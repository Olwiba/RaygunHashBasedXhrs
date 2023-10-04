const express = require('express');
const favicon = require('express-favicon');
const port = 3000;

const app = express()
app.use(favicon(__dirname + '/favicon.ico'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Demo JS app listening on port ${port}`);
    console.log('\x1b[33m%s\x1b[0m', `http://localhost:${port}`);
})