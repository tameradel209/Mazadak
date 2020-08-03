const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./AdSchema')
require('./userSchema')

app.use(bodyParser.json())

const Ad = mongoose.model('ad')
const User = mongoose.model('users')

const mongoUrl = 'mongodb+srv://tamer:Ux81KcGMQJbGzn1B@cluster0.luk6p.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => console.log('connected to mongo'))

mongoose.connection.on('error', (error)=>console.log('error: ', error))

app.post('/find-ads', (req,res)=>{
    Ad.find(req.body)
    .then(data => {
        res.send(data)
    }).catch(error => console.log(error))
})

app.post('/delete-ads', (req,res)=>{
    Ad.deleteMany(req.body)
    .then(data => {
        res.send(data)
    }).catch(error => console.log(error))
})

app.get('/users', (req,res)=>{
    User.find({})
    .then(data => {
        res.send(data)
    }).catch(error => console.log(error))
})

app.post('/find-user', (req,res)=>{
    User.find(req.body)
    .then(data => {
        res.send(data)
    }).catch(error => console.log(error))
})

app.post('/send-ad', (req,res)=>{

    const ad = new Ad(req.body)

    ad.save().then(data => {
        res.send('Ad is inserted successfully')
    }).catch(error => console.log(error))

})

app.post('/send-user', (req,res)=>{

    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })

    user.save().then(data => {
        res.send('user inserted successully')
    }).catch(error => console.log(error))

})

app.post('/delete-ad', (req,res)=>{

    Ad.findByIdAndRemove(req.body.id)
    .then(data=>{
        res.send('Ad is deleted successfully')
    })
    .catch(error => console.log(error))

})

app.post('/delete-user', (req,res)=>{

    User.findByIdAndRemove(req.body.id)
    .then(data=>{
        res.send('User is deleted successfully')
    })
    .catch(error => console.log(error))

})

app.post('/update-ad',(req,res)=>{
    Ad.findByIdAndUpdate(req.body.id, req.body)
    .then(data=>{
        res.send('Ad is updated successfully')
    }).catch(error => console.log(error))
})


app.post('/update-user',(req,res)=>{
    User.findByIdAndUpdate(req.body.id,{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    }).then(data=>{
        res.send('User is updated successfully')
    }).catch(error => console.log(error))
})

app.listen(3001, ()=>{console.log('server running')})
