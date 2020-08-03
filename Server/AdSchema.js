const mongoose = require('mongoose')

const AdSchema = new mongoose.Schema({
    images:String,
    category:String,
    price:String,
    header:String,
    location:String,
    brand:String,
    condition:String,
    warranty:String,
    ad_type:String,
    payment_option:String,
    description:String,
    user:String,
    phone:String,
    email:String,
    publish_time:String
})

mongoose.model('ad', AdSchema)

/*
{
    "images":"https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "category":"Vehicles/Cars For Sale/Audi",
    "price":"5000",
    "header":"iphone 11 pro",
    "location":"Alexandria",
    "brand":"apple",
    "condition":"used",
    "warranty":"1 year",
    "ad_type":"for sale",
    "payment_option":"cash",
    "description":"wonderful mobile",
    "user":"Tamer Adel",
    "phone":"01207350507",
    "email":"tameradel209@icloud.com",
    "publish_time":"Mon Aug 03 2020 15:34:29 GMT+0200"
    }
Vehicles/Cars For Sale/Alfa Romeo
Vehicles/Cars For Sale/Aston Martin
Vehicles/Cars For Sale/Audi
Vehicles/Cars For Sale/BMW
    */