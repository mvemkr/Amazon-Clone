var mongoose = require('mongoose');
var mongoostastic = require('mongoosastic');
var Schema  = mongoose.Schema;

var ProductSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    name: String,
    price: Number,
    image: String
});

ProductSchema.plugin(mongoostastic, {
    hosts: [
        'localhost:9200'
    ]
    // ,
    // populate: [
    //     {path: 'category', select: 'name'}
    // ]
});


module.exports = mongoose.model('Product', ProductSchema);