if(process.env.NODE_ENV == "production"){
const { MongoClient } = require('mongodb'); 
const uri = "mongodb+srv://dbblogapp:0987poiu@blogapp-prod.zs1yc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});  

 
}else{
    module.exports = {mongoUri: "mongodb://localhost/blogapp"}
}