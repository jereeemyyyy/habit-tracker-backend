const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB connection SUCCESS");
    } catch (err) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

// Exports the function
// Similar to exports in React.js
module.exports = connectDB;