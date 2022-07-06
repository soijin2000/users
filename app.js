const express = require('express')
const app = express()
const mongoose = require('mongoose')
const AddedNewUser = require('./schema_user')

const dbURI = 'mongodb+srv://user1:test1@cluster0.lwpug.mongodb.net/DBMain?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result)=> console.log('Connected to database'))
    .catch((err)=> console.log(err))


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req,res)=> {
    res.sendFile('./index.html', {root:__dirname})
})

const users = [
    {id: 1, username: 'Alvin', position: 'Software Engineer'},
    {id: 2, username: 'Ronald', position: 'Web Developer'},
    {id: 3, username: 'Venz', position: 'Data Analyst'}
]

app.get('/users', (req,res)=> {
    res.send(users)
})

app.get('/users/:id', (req,res)=> {
    const userID = users.find((uid)=> uid.id === parseInt(req.params.id))
    if (!userID) {
        console.log(`User with ID "${req.params.id}" does not exist`)
        res.send(`User with ID "${req.params.id}" does not exist`)
    } else {
        res.send(userID)
    }
})

app.post('/users', (req,res)=> {
    // const newUser = req.body
    // // res.send(`New user with an ID of "${newUser.id}" has been added`)
    
    // console.log(newUser)
    // users.push(newUser)

    const addUserModel = new AddedNewUser({
        username: req.body.username,
        position: req.body.position
    });

    addUserModel.save()
        .then((result)=> {
            res.sendFile('./results.html', {root:__dirname})
        })
        .catch((err)=> {
            console.log(err)
        })
})

const port = process.env.PORT || 7000

app.listen(port, ()=> {
    console.log('Listening on port',port)
})