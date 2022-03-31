const mongoose = require('mongoose');
const { Schema } = mongoose

const orderSchema = new Schema({

  order_id:{type:String,required:true},
  user_data:{type: mongoose.Types.ObjectId,reference:'User'},
  totalcost:{type:Number,default:0},
  totalquantity:{type:Number,default:0},
  order_details:[
    {productType: { type: String },
    quantity: { type: Number, default: 0 },
    wash: { type: Boolean, default: false },
    ironing: { type: Boolean, default: false },
    Folding: { type: Boolean, default: false },
    Packing: { type: Boolean, default: false },
    price:{type:Number,default:"---"},},{timestamps:true},
  ],
  
    status: {type: String,default:"ready to pick"}
  })

const Order = mongoose.model('Order',orderSchema)

module.exports = Order;