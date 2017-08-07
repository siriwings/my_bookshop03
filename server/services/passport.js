/**
 * Created by siri on 2017-06-10.
 */
const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//For local strategy
const LocalStrategy = require('passport-local');

//Create local strategy
const localOptions={usernameField :'email'};
const localLogin = new LocalStrategy(localOptions,function (email,password, done) {
    //Verify this email and password, call done with the user
    //if it is the correct email and password
    //otherwise, call done with false
    User.findOne({email:email},function (err,user) {
        if(err){return done(err);}
        if(!user){return done(null,false);}

        //compare password - is `password` equal to user.password?
        user.comparePassword(password,function (err,isMatch) {
            if(err){return done(err);}
            if(!isMatch){return done(null,false);}

            return done(null,user);
        });
    });
});

//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    console.log('payload : ', payload);
    //See if the user ID in the payload exists in our database
    //If it does, call 'done' with that user
    //otherwise, call done without a user object
    User.findById(payload.sub, function (err, user) {

        //one err is the search failed to occur
        if(err){return done(err,false);}

        if(user){
            done(null,user);
        }else{
            //another err is that doing a search but we couldn't find a user.
            done(null,false);
        }
    });
});

//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);