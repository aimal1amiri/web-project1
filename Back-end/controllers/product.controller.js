import Product from "../models/product.model.js"
import mongoose from "mongoose";





export const getProduct= async (req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json({success:true, data:products});

    }catch(error){
        console.log("error in feteching products: ", error.message);
        res.status(500).json({
            success:false,
            message:"server error"
        });
    }
};


export const createProduct=async(req,res)=>{

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

};


export const updateProduct=async (req, res)=>{
    const {id}=req.params;

    const product=req.body;
    /*
    if (!mongoose.Types.ObjecteId.isValid(id)){
        return res.status(404).json({
            success:false,
            message:"product id is not valid"
        });
    }
    */

    try{
        const updatedProducted= await Product.findByIdAndUpdate(id , product,{new:true});
        res.status(200).json({
            success:true,
            message:"the product is updated"
        });
    }catch (error){
        res.status(500).json({
            success:false,
            message:"server error"
        })
    }
};


export const deleteProduct=async (req,res)=>{
    const {id}=req.params
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product is deleted"});
    } catch (error){
        res.status(500).json({success:false, message: "server is not working!"})
    }
};