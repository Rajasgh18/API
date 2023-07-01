const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectToMonogo = () => {
    // mongoose.set('strictQuery', true);
    mongoose.set('strictPopulate', false);
    mongoose.connect('mongodb+srv://rajasgh18:12344321@kingcluster.wmdb4w5.mongodb.net/KingKart', { useNewUrlParser: "true", useUnifiedTopology: "true" });
    const db = mongoose.connection;
    db.on('connected', ()=>{console.log("MongoDB is Connected!")});
    db.on('error', (err)=>{err});
}

module.exports = connectToMonogo;