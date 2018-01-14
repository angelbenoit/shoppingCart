var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    item: String,
    price: Number,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Item", itemSchema);