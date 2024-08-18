const express = require('express');
const app = express();
const cors = require("cors");
const CartRoute =  require("./routes/cart");
app.use(express.json());
app.use(cors());

app.use('/cart',CartRoute);
app.get('/',(req,res)=>{
    res.end("hELLO WORLD ")
});


app.listen(3000,()=>{
    console.log("listening on port 3000")
})