const mongoose = require("mongoose");


// connect function connect to database
const connect = () => {
  mongoose.connect(
    process.env.DATABASE
  );
};

module.exports = connect;
