const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=> console.log("errro" + error.message))