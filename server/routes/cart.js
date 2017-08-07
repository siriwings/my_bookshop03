/**
 * Created by siri on 2017-06-28.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var db = mongoose.connection;
db.on('error', console.error.bind(console, '#MongoDB - connection error: '));


//---->>SET UP SESSIONS <<<----
router.use(session({
    secret: 'mySecretString',
    saveUninitialized: false,
    resave:false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 2}, // 2 days in milliseconds
    store: new MongoStore({mongooseConnection:
    db, ttl: 2 * 24 * 60 * 60})
    //ttl: 2 days * 24 hours * 60 minutes * 60 seconds
}))



// SAVE SESSION CART API
router.post('/', function(req, res){
    var cart = req.body;
    console.log(cart);
    console.log('req.session.cart : ');
    console.log(req.session.cart);

    req.session.cart = cart;
    req.session.save(function(err){
        if(err){
            throw err;
        }
        res.json(req.session.cart);
    })
});

// GET SESSION CART API
router.get('/', function(req, res){
    if(typeof req.session.cart !== 'undefined'){
        res.json(req.session.cart);
    }
});

module.exports = router;
