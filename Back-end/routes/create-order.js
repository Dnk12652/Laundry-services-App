const express = require('express');
const bodyParser = require('body-parser');
const Order = require('..//models//orders');
const router = express.Router();
const mongoose = require('mongoose');

router.use(bodyParser());
router.get("/orders",async(req,res)=>{
    const orders = await Order.find({user_data:req.user})
    return res.json({
        status:"fetched successfully",
        orders
    })
})
router.post("/orders", async (req, res) => {
    try{
       const order_slno = "ORDID00" + ((await Order.countDocuments()) +1) 
    const order = await Order.create({ 
        order_id:order_slno,
        user_data:req.user,
        order_details : req.body.order_details,
        totalcost:req.body.totalcost,
        totalquantity:req.body.totalquantity
    })
    return res.status(200).json({
        status: "Order is created", 
        data : order
    })
    }   catch(e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
    })
router.get('/orders/:id', async (req, res) => {
    try{
        const orders = await Order.findOne({user_data:req.user});
        console.log(orders,user_data)
        return res.status(200).json({
            status: 'success',
            orders
        });
    }catch(err){
        return res.status(500).json({
            status: 'error',
            
            message: err.message
        });
    }
})

    router.put('/orders/:id', async (req, res) => {
        try{
            const order = await Order.updateOne({_id: req.params.id, user_data: req.user},{status: 'cancelled'})
            return res.status(200).json({
                status: 'success',
                order
            });
        }catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message
            });
        }
    });
    
module.exports=router;