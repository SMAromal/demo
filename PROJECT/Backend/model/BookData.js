const mongoose=require('mongoose');
const BookSchema=mongoose.Schema({
    ISBN:String,
    Title:String,
    Author:String,
    Genre:String,
    Publication:String,
    Image:String,
})

const BookData=mongoose.model('addbook',BookSchema)
module.exports=BookData