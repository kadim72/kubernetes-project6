const mongoose = require('mongoose');

const mongodbUser = process.env.MONGODB_USER;
const mongodbPassword = encodeURIComponent(process.env.MONGODB_PASSWORD);
const mongodbHost = process.env.MONGODB_HOST;

// console.log("host"+mongodbHost);
// console.log("user"+mongodbUser);
// console.log("password"+mongodbPassword);
mongoose.connect(`mongodb://${mongodbUser}:${mongodbPassword}@${mongodbHost}`).then(() => {
    console.log('Connected !');
}).catch(e => console.log(e));