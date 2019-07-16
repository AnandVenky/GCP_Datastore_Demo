require('dotenv').config()

const fetch = require('node-fetch');
const express = require('express')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('./connector');


// usage: /getcustomers/customerID
app.route('/getCustomers/:customerId')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `customers` WHERE Id = ? LIMIT 3", req.params.userId,
            function(error, results, fields) {
                if (error) throw error;
                res.json(results);
            }
        );
    });


// usage: /getcustomers
app.route('/getCustomers')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `customers", req.params.userId,
            function(error, results, fields) {
                if (error) throw error;
                res.json(results);
            }
        );
    });



// usage: /getcustomers/age
app.route('/getCustomers/:age')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `customers` WHERE age = ? LIMIT 3", req.params.userId,
            function(error, results, fields) {
                if (error) throw error;
                res.json(results);
            }
        );
    });


app.get('/status', (req, res) => res.send('Working!'));


// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);


//if testing on localhost
/*
app.listen(8000, () => {
    console.log('listening on port 8000!')
});
*/