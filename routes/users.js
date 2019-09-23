const express = require('express');


const router = express.Router();


router.get('/login', (req,res)=>{
    console.log(req.body);
    
    res.send("Users Login");
});

router.post('/register', (req,res)=>{
    console.log(req.body);
    
    res.send("Users Registration");
});

module.exports = router;