const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

// import routes

// connect to mongodb
mongoose.connect(
  process.env.MONGOOSE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on(
  'error', 
  console.error.bind(
    console,
    'Connection Error: '
  )
);
mongoose.connection.once('open', () => {
  console.log('Connected to relative database');
});
mongoose.Promise = global.Promise;

// build the app
const app = express();

// add app configurations
app.use(morgan('dev'));
// app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow access middleware on routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
    return res.status(200).json({});
  }

  next();
});

// incorporate routes into app

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
}); 

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    }
  });
});

module.exports = app;
