const mongoose = require("mongoose");


const productsSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
});


const Products = new mongoose.model("products",productsSchema);


module.exports = Products;


