
const cardsData = require('./cartData');

module.exports.getCartData = async (req,res)=>{
    try{
        return res.status(200).json(cardsData)
    }catch(err){
        console.log("err", err);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}