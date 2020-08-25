var mongoose = require('mongoose');

var lenderSchema = new mongoose.Schema({
    id: String,
    name: String,
    // transactions stores the mongoDB id of all the transaction model
    // where the this lender is a counterparty
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
		    ref: 'Transaction'
        }
    ]
});

module.exports = mongoose.model('Lender', lenderSchema);