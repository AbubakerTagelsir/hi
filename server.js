const express = require('express')
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8000;

const keys = require('./config/keys');

const UsersRoutes = require('./routes/users');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology:true});

app.use('/users', UsersRoutes);

app.use('/', (req,res)=>{
    res.send("Hello!")
});

app.listen(PORT, (err)=>{
    console.log(`Your server is running on port ${PORT}`);
    
});