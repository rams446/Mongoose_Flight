require('dotenv').config();
const mongoose = require("mongoose")
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection 

//// Connect to Mongo
mongoose.connect(mongoURI, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true });

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


module.exports = db