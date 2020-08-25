var express = require('express');
var Transaction = require('../models/transaction');

var router = express.Router();

// INDEX ROUTE
router.get('/', function(req, res, next){
    Transaction.find({}, function(err, allTransactions){
        if(err){
            console.log(err);
        } else{
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(JSON.stringify(allTransactions));
        }
    })
})

// CREATE ROUTE
router.post('/', function(req, res, next){
    try{
        console.log('req.body::');
        console.log(req.body);
        var newTransaction = {...req.body};
        console.log(newTransaction);

        // step1: load borrower model using newTranssaction.borrower
        // step2: load lender model using newTransaction.lender
        
        // // create a new lender to save to db
        Transaction.create(newTransaction, function(err, newlyCreated){
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