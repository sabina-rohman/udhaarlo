var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
    transactionId: String,
    amount: Number,
    interestRate: Number,
    expiryDate: Number,
    borrower: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Borrower'
		},
		name: String
    },
    lender: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Lender'
		},
		name: String
	}
})

module.exports = mongoose.model('Transaction', transactionSchema);