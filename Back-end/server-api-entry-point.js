import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js"; 
dotenv.config();


//iImSEhtHgzOeYsxt


const app =express();

app.use(express.json()); //allow us to accept JSON data in req.body

app.post("/api/products", async(req,res)=>{

    const product=req.body; //user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "please provide all fields"});
    }

    const newProduct= new Product(product);

    try {   
        await newProduct.save();
        res.status(201).json({success:true, data:newProduct});
    }catch (error){
        console.error("Error in created product:",error.message);
        res.status(500).json({success:false, message:"Server Error"});

    }

});


//console.log(process.env.MONGO_URI);

app.listen(5000,()=>{
    connectDB();
    console.log("server started at 5000 port hello");
});