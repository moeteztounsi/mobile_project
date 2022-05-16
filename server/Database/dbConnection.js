const mongoose = require('mongoose');

dbURL = 'mongodb+srv://Crud_101:25865406m@cluster0.br8oo.mongodb.net/task_management?retryWrites=true&w=majority'

const connectDB = async()=>{
    try{

        await mongoose.connect(dbURL,
            {useUnifiedTopology: true, 
            useNewUrlParser: true,});

        console.log(`MongoDB Connected....`);

    }catch(err){
        console.log(err);
        process.exit();
    }

};

module.exports = connectDB;