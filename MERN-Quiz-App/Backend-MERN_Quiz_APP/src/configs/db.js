
// const mongoose = require('mongoose')
// require("dotenv").config()
// module.exports = () => {
//  mongoose.connect(
//     process.env.DATABASE
//   )
// }


const mongoose = require('mongoose');
require("dotenv").config();

module.exports = () => {
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("Error connecting to MongoDB:", err));
};
