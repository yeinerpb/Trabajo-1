const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

//Controllers
const { globalErrorHandler } = require('./controllers/errors.controllers');

//Routers
const { repairsRouter } = require('./routes/repairs.routes');

const { usersRouter } = require('./routes/users.routes');

const app = express();

app.use(express.json());

app.use(helmet());

app.use(compression());

if (process.env.NODE_ENV === 'develoment') app.use(morgan('dev'));
else app.use(morgan('combinet'));

const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000,
  message: 'Too many request from this IP',
});
app.use(limiter);

//Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

app.use('*', globalErrorHandler);

module.exports = { app };
