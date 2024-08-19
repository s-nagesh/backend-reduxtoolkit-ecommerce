const express = require('express');
const serverless = require('serverless-http');
const app = express();
const cors = require("cors");
// const CartRoute =  require("./routes/cart");
app.use(express.json());
app.use(cors());

// app.use('/cart',CartRoute);
require("../routes/cart")(app);
app.get('/',(req,res)=>{
    res.end("hELLO WORLD ")
});

module.exports.handler = serverless(app);


// run this api end point 
// https://findfoodieserver.netlify.app/.netlify/functions/app
