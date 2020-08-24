var mongoose = require('mongoose');

var borrowerSchema = new mongoose.Schema({
    id: String,
    name: String
});

module.exports = mongoose.model('Borrower', borrowerSchema);