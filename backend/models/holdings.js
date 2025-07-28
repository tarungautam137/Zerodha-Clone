const mongoose=require("mongoose")

const HoldingsSchema=new mongoose.Schema({

    Name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String
})

module.exports=mongoose.model("Holding",HoldingsSchema)