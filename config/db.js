const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://admin:admin123@todo.dr3ukkt.mongodb.net/').on('open', ()=> {
    console.log('MongoDb COnnected');
}).on('error', () => {
    console.log("MongoDB connection error");
});

module.exports = connection;