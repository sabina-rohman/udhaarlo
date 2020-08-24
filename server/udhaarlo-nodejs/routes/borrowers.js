var express = require('express');
var Borrower = require('../models/borrower');

var router = express.Router();

// INDEX ROUTE
router.get('/', function(req, res, next){
    Borrower.find({}, function(err, allBorrowers){
        if(err){
            console.log(err);
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(allBorrowers));
        }
    })
})

// CREATE ROUTE
router.post('/', function(req, res, next){
    console.log("req.body::");	
    console.log(req.body);  
    var name = req.body.name;
    var id = req.body.id;
    
    var newBorrower  = {name: name, id: id};
    console.log(newBorrower);

    // create a new borrower and save to Db
    Borrower.create(newBorrower, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(newlyCreated));
        }
    })
})

module.exports = router;