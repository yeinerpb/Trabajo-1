const express = require('express');

const { globalErrorHandler } = require('./controllers/errors.controllers')

const { reset } = require('nodemon');
const { repairsRouter } = require('./routes/repairs.routes');

const { usersRouter } = require('./routes/users.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

app.use('*', globalErrorHandler
);

module.exports = { app };
