const express = require('express');
const router = express.Router();
const { getCartData } = require('../controllers/cart');

router.get('/',async (req,res)=>{
    await getCartData(req,res);
});


module.exports = router;