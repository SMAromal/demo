const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    Name:String,
    Place:String,
    Age:String,
    Password:String,
    Email:String,
    phoneNumber:String,
})

const UserData=mongoose.model('userdetail',UserSchema)
module.exports=UserData