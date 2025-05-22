const mongoose = require("mongoose");

const mongodb_uri = process.env.MONGODB_URI
console.log(mongodb_uri)

const connectToDB = async ()=>{
    try {
        await mongoose.connect(mongodb_uri)
        console.log("DB Connected")
    } catch (error) {
         console.log("error while connecting to db",error)
    }
}

module.exports = connectToDB;