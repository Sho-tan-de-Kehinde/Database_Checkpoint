const mongoose = require('mongoose');
const express = require('express')
const dotenv = require('dotenv').config()
const app = express();
const Profile = require('./Modules/model')
const apiRoutes = require('./routes/apiRoutes')


// Create and Save Document in the Database using Model Constructor Method
const saveFile = function(){
const user = new Profile({
    Name: 'Uche Obi',
    Age: '21',
    favoriteFood: 'dod',
})
   user.save()
.then((Data)=>{res.send(Data)})
.catch((err)=>{console.log(err)})
};

    //api routes
    app.use(apiRoutes)



    

const PORT =process.env.PORT
const uri =process.env.uri

mongoose.connect(uri)
.then((res)=>{
    app.listen(PORT)
    console.log('DB connected')
})
.catch((err)=>{
    console.log(err)
})