"use strict"
const mongoose = require('mongoose');
const booksSchema = mongoose.Schema({
    title:String,
    description:String,
    image:String,
    price:Number
});

const Book = mongoose.model('book',booksSchema);
module.exports=Book;