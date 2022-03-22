const app = require('./app');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/books',()=>{
    console.log("Db connected");
})

app.listen(3000,()=>{
    console.log("Server Listening on port: 3000");
});