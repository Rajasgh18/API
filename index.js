const express = require('express');
const App = express();

App.use('/', (req, res)=>{
    res.send('Welcome!');
})

App.listen('5000', ()=>{
    console.log("Server Listening at http://localhost:5000");
})