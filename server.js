const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
require('heroku-self-ping').default(process.env.APP_URL);


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);