/**
 * Created by siri on 2017-06-28.
 */
/**
 * Created by siri on 2017-06-10.
 */
const express = require('express');
const router = new express.Router();
const passport = require('passport');
const Book = require('./../models/book');


const requireAuth = passport.authenticate('jwt', {session: false});

router.get('/', function(req, res) {
    Book.find(function (err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    })
});


router.post('/',requireAuth, function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    // CHECK CONTENTS VALID
    // if (typeof req.body.contents !== 'string') {
    //     return res.status(400).json({
    //         error: "EMPTY CONTENTS",
    //         code: 2
    //     });
    // }
    //
    // if (req.body.contents === "") {
    //     return res.status(400).json({
    //         error: "EMPTY CONTENTS",
    //         code: 2
    //     });
    // }

    // CREATE NEW MEMO
    let book = new Book({
        title: title,
        description: description,
        price: price,
        image:image
    });

    // SAVE IN DATABASE
    book.save(function (err) {
        if (err) throw err;
        return res.json({success: true});
    });
});

//--->> GET BOOKS IMAGES API <<<<-----
router.get('/images',function (req,res) {
    console.log(__dirname);
    const imgFolder = __dirname + './../public/images/';
    // REQUIRE FILE SYSTEM
    const fs = require('fs');

    //read all files in the directory
    fs.readdir(imgFolder,function (err,files) {
        if(err){
            return console.error(err);
        }
        //CREATE AN EMPTY ARRAY
        const filesArr = [];
        // var i = 1;
        // ITERATE ALL IMAGES IN THE DIRECTORY AND ADD TO THE THE ARRAY
        files.forEach(function(file){
            filesArr.push({name: file});
            // i++
        });
        // SEND THE JSON RESPONSE WITH THE Array
        res.json(filesArr);
    })
})


module.exports = router;
