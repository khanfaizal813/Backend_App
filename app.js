require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')



 const app = express()
console.log('.env accessible here.......',process.env.PORT)
 const PORT = process.env.PORT
 app.use(morgan('dev'));
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());


// employee Routes 
app.use('/api/employee', employeeRoutes)

// mongodb connection
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/myDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
).then(res => {
    console.log('mongoDB connection successful!....');
// express server listen
    app.listen(PORT, () => {
        console.log(`express server running at ${PORT}`)
    })
}).catch(err => {
    console.log('connection failed!....', err);

})





// app.use('/', (req, res, next) => {
//     res.json({
//         message: 'API calling from postman'
//     })

// })