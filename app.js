
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const port =3000

//middleware
app.use(express.static('./public'))
app.use(express.json())


// routes


app.use('/api/v1/tasks/',tasks)

// app.get('/api/v1/tasks') --> get tasks
// app.post('/api/v1/tasks') --> create tasks
// app.get('/api/v1/tasks/:id') --> get single task
// app.patch('/api/v1/tasks/:id') --> update a task
// app.delete('/api/v1/tasks/:id') --> delete a task

// using async await as connectDb returns a promise

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen( process.env.PORT || port,()=>{
            console.log(`Server is listening on port ${port}... `);// invoke connectDB and only if the connection is successful then spin up the server
        })
    }
    catch(error){
        console.log(error);
    }
}

start()