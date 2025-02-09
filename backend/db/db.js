const mongoose = require("mongoose");

exports.connectToDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => ("DB connected"))
    .catch((err) => console.error("connectio error is:", err));

    mongoose.connection.on('error',function(err){
        console.log("the error is:",err);
        
    })
};
