const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    descrip: { type:String}
}, { timestamps: true });
module.exports = mongoose.model('productDB', ProductSchema);

