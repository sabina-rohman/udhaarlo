var mongoose = require('mongoose');

var lenderSchema = new mongoose.Schema({
    lenderId: String,
    name: String
});

module.exports = mongoose.model('Lender', lenderSchema);