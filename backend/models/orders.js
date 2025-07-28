const mongoose=require("mongoose")

const OrdersSchema=new mongoose.Schema({

    Name: String,
    qty: Number,
    price: Number,
    mode: String
})

module.exports=mongoose.model("Order",OrdersSchema)