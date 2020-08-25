var mongoose = require('mongoose');

var lenderSchema = new mongoose.Schema({
    id: String,
    name: String
});

module.exports = mongoose.model('Lender', lenderSchema);