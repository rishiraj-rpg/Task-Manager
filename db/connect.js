const mongoose = require('mongoose')


const connectDB = (url) => {
    return mongoose.connect(url,{   // returning promise
        // all these to remove warnings
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports = connectDB