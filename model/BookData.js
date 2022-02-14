const mongoose = require('mongoose');

const BookDataSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'A Book should have a title']
    },
    author:{
        type:String,
        required:[true,'A Book should have an Author']
    },
    isbn:{
        type:String,
        required:[true,'A Book should have an isbn']
    },
    price:{
        type:Number,
        required:[true,'A Book should have a price']
    },

});

const BookData = mongoose.model('BookData',BookDataSchema);
module.exports = BookData;