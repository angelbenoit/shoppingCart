var express = require('express'),
    app                 = express(),
    path                = require("path"),
    expressSanitizer    = require("express-sanitizer"),
    bodyParser          = require("body-parser"),
    methodOverride      = require("method-override"),
    mongoose            = require("mongoose"),
    routes              = require("./app_server/routes/routes");

mongoose.connect("mongodb://localhost/cart");

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
app.use("/", routes);

app.listen(3000);