var express = require('express');
var Lender = require('../models/lender');

var router = express.Router();

// INDEX ROUTE
router.get('/', function(req, res, next){
    Lender.find({}, function(err, allLenders){
        if(err){
            console.log(err);
        } else{
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(allLenders));
        }
    })
})

// CREATE ROUTE
router.post('/', function(req, res, next){
    try{
        console.log('req.body::');
        console.log(req.body);
        var name = req.body.name;
        var id = req.body.id;

        var newLender = {name: name, id: id};
        console.log(newLender);

        // create a new lender to save to db
        Lender.create(newLender, function(err, newlyCreated){
            if(err){
                console.log(err);
            } else {
                console.log(newlyCreated);
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.end(JSON.stringify(newlyCreated));
            }
        })
    }
    catch(err) {
        console.log(err);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(JSON.stringify({error: err.message}));
    }
})

module.exports = router;