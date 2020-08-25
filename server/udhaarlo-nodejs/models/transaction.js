var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
	amount: Number,
	interestRate: Number,
	createdAt: { type: Date, default: Date.now },
	expiryDate: Date,
	borrower: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Borrower'
	},
	lender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Lender'
	}
})

module.exports = mongoose.model('Transaction', transactionSchema);