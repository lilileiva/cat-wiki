const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { CORS_URL } = process.env;


//server initialize
const app = express()
app.set('port', process.env.PORT || 3001)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan('dev'))

//access allow
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', CORS_URL);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// routes
app.use('/cat-wiki', routes)

//catch error endware
const errorHandler = (err, req, res) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
};
app.use(errorHandler);


module.exports = app;