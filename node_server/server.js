const express = require('express');
const path = require('path');
const parser = require('body-parser');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var roomsRouter = require('./routes/rooms');


var app = express();

require('./database');

//app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.json());


app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', roomsRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("SERVER STARTED!");
});
