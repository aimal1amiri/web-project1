import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";


dotenv.config();


//iImSEhtHgzOeYsxt



const app =express();

const PORT =process.env.PORT 
app.use(express.json()); //allow us to accept JSON data in req.body


app.use("/api/products",productRoutes);
//console.log(process.env.MONGO_URI);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server started at ${PORT} port hello`);
});