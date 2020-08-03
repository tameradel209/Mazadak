const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})

mongoose.model('users', UserSchema)

/*
{
    "firstName":"tamer",
    "lastName":"adel",
    "email":"tameradel209@icloud.com",
    "password":"Tamer209"
}
*/