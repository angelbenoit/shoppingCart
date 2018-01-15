

var mongoose    = require("mongoose");
var Item        = require("../models/cartItem");

//mongoose.connect("mongodb://localhost/cart");

//SHOW CART LIST
module.exports.list = function(req, res){
   
    Item.find({}, function(err, itemFound){
        if(err){
            res.redirect("/");
        }
        else{
            Item.count({}, function(err, counter){
                if(err){
                    res.redirect("/");
                }
                else{
                    res.render("home", {itemFound: itemFound, counter: counter});
                }
            })
        }
    });
}

module.exports.newPage = function(req, res){
    res.render("new");
}

module.exports.new = function(req, res){
    var cart = {};
    cart.item = req.body.item;
    cart.price = req.body.price;
    console.log(req.body.item);
    console.log(req.body.price);
    Item.create(cart, function(err, itemFound){
        //console.log(itemFound);
        if(err){
            res.redirect("/");
        }
        else{
            res.redirect("/");
        }
    });
}

module.exports.deletePost = function(req, res){
    console.log(req.params.id);
    Item.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/");
        }
        else{
            res.redirect("/");
        }
    });
}

module.exports.getEdit = function(req, res){
    Item.findById(req.params.id, function(err, foundItem){
        if(err){
            res.redirect("/");
        }
        else{
            res.render("edit", {foundItem: foundItem});
        }
    })
}

module.exports.editPost = function(req, res){
    cart = {};
    cart.item = req.body.item;
    cart.price = req.body.price;
    console.log(req.params.id);
    Item.findByIdAndUpdate(req.params.id, cart, function(err, updatedCart){
        if(err){
            res.redirect("/");
        }
        else{
            res.redirect("/");
        }
    })
}