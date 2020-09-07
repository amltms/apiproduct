const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Insert product name']
    },
    description:{
        type: String,
        required: [true, 'Insert description']
    },
    price:{
        type:Number,
        required: [true, 'Insert Price']
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema);