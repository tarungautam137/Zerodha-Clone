const mongoose=require("mongoose")

const PositionsSchema=new mongoose.Schema({

    product:String,
    Name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss:Boolean
})

module.exports=mongoose.model("Position",PositionsSchema)