const Product = require("../models/Product.js");


exports.getProducts = async(req, res, next) =>{
    try {
        const products = await Product.find();
        return res.status(201).json({
            success:true,
            data: products
        })
    } catch (error) {
        return res.status(404).json({
            success:false,
            error: error
        })
    }
}

exports.getProduct = async(req, res, next) =>{
    try {
        const product = await Product.findById(req.params.id);
        return res.status(201).json({
            success:true,
            data: product
        })
    } catch (error) {
        return res.status(404).json({
            success:false,
            error: error
        })
    }
}

exports.createProduct = async(req,res,next) =>{
    try {
        const product = req.body;
        await Product.create(product)

        return res.status(201).json({
            success:true,
            data: product
        })     
    } catch (error) {
       return res.status(400).json({success:false, error:error}) 
    }


}

exports.deleteProduct = async(req, res, next) =>{
    try {
        const product = await Product.findById(req.params.id);
        product.remove();
        return res.status(201).json({
            success:true,
            data: product
        })
    } catch (error) {
        return res.status(404).json({
            success:false,
            error: error
        })
    }
}

exports.updateProduct = async(req, res, next) =>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body});
        
        
        return res.status(201).json({
            success:true,
            data: product
        })
    } catch (error) {
        return res.status(404).json({
            success:false,
            error: error
        })
    }
}