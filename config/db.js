var mongoose = require("mongoose");
const uri =
  "mongodb://armaan:jaya%401996@cluster0-shard-00-00.oesty.mongodb.net:27017,cluster0-shard-00-01.oesty.mongodb.net:27017,cluster0-shard-00-02.oesty.mongodb.net:27017/SUDHA?ssl=true&replicaSet=atlas-sbatld-shard-0&authSource=admin&retryWrites=true&w=majority";
// connecting through my database named "SUDHA"
console.log("try to connect")
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("mongoAtlas connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
