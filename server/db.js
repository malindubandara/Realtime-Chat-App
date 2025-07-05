const mongoose = require('mongoose');

function Connection(){
    const mongoURI = "mongodb://localhost:27017/chat"
    mongoose.connect(mongoURI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}

module.exports = Connection;