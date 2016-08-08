var router = require('express').Router();
var async = require('async');
var faker = require('faker');
var Category = require('../models/category');
var Product = require('../models/product');

router.post('/search', function(req, res, next) {
    // Product.search({
    //     query_string: { query: req.body.search_term }
    // }, function(err, results) {
    //     if(err) return next(err);
    //     res.json(results);
    // });
    // Product.search({
    //     query_string: { query: req.body.search_term }
    // }, function(err, results){
    //     if(err) return next(err);
    //     var data = results.hits.hits.map( function(hit) {
    //         return hit;
    //     });
    //     var subOrderList = new Array();
    //     var dataCount = 0;
    //
    //     data.forEach(function(dataItem){
    //         Category.findOne({ _id: dataItem._source.category }).lean().exec(function (err, category) {
    //             if (err) return next(err);
    //             dataCount++;
    //             dataItem._source.categoryName = category.name;
    //             subOrderList.push(dataItem);
    //             if (dataCount == data.length) {
    //                 res.json(subOrderList);
    //             }
    //         });
    //     });
    // });
    Product
        .find({ name: new RegExp(req.body.search_term , "i")} )
        .populate( 'category' )
        .lean()
        .exec( function(err, products){
            if(err) return next(err);
            res.json(products);
        });
});

router.get( '/:name', function(req, res, next) {
    async.waterfall([
        function(callback) {
            Category.findOne( {name: req.params.name }, function(err, category) {
                if (err) return next(err);
                callback(null, category);
            });
        },
        function(category, callback) {
            for (var i = 0; i < 30; i++) {
                var product = new Product();
                product.category = category._id;
                product.name = faker.commerce.productName();
                product.price = faker.commerce.price();
                product.image = faker.image.image();

                product.save();
            }
        }
    ]);
    res.json({message: 'Success' });
});

module.exports = router;