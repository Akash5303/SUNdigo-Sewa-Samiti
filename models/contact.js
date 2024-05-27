// Define a Mongoose schema for User
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    subject: String,
    message: String,

   timestamps: { type: Date, default: Date.now }
 });

 module.exports = mongoose.model('contact', userSchema);