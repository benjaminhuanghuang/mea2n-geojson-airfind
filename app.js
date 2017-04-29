const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airfinds')
const db = mongoose.connection;

const app = express();
const port = 3000;

Airport = require('./models/airport');
State = require('./models/state');

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");   // default allow get, post
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Client folder
app.use(express.static(__dirname + '/client'));

// Body parser
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Please use /api/');
});

// Routes
// const customers = require('./routes/customers');
// const invoices = require('./routes/invoices');
app.get('/api/airports', (req, res)=>{
    Airport.getAirports((err, docs)=>{
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
});

// States
app.get('/api/states', (req, res)=>{
    State.getStates((err, docs)=>{
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
});

// Airports by state
app.get('/api/airports/state/:state', (req, res)=>{
    Airport.getAirportsByState(req.params.state, (err, docs)=>{
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
});

app.listen(port, () => {
    console.log('Server started on Port ' + port);
});