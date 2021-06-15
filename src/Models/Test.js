
const mongoose = require('mongoose');


const TestSchema = new mongoose.Schema({
    id: Number,
    text: String,
});

module.exports = mongoose.model('Test', TestSchema);