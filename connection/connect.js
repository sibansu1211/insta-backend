const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(
    // 'mongodb+srv://saurav-dope:Saurav_6989@cluster0.ztxtp.mongodb.net/instaclone?retryWrites=true&w=majority'
    'mongodb+srv://bhavana:bhavana@cluster0.up1le.mongodb.net/instaclone?retryWrites=true&w=majority',()=>{
       console.log("mongoose connected")
    });
}

module.exports = main;
