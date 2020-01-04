const express = require('express'),
      app = express(),
      notes = require('./routes/notes');

//解决跨域
app.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        next();
    });

app.use('/notes',notes);
app.listen(3001)
