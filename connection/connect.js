const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(
    "mongodb+srv://instaclone:Sibu1234@cluster1.ldr8yfa.mongodb.net/?retryWrites=true&w=majority", () => {
       console.log("mongoose connected")
    });
}

module.exports = main;