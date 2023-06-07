const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://bhuvanraj:bhuvanraj@cluster.set51ms.mongodb.net/socialtree?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;