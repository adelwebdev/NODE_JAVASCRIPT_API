// on appelle mongoose comme suite: à faire dans dbConfig;
const mongoose = require("mongoose");

// pr nous connecter à la DB (pr mongoDB) faire comme si bàs:
// ici node-api (nom de notre DB ; p être autre nom!)
// ce fichier n'est pas lancer car c index.js qui surveille tout, faut passer dbConfig à index.js
mongoose.connect(
  "mongodb://localhost:27017/node-api",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
);
// c la doc; faut écrire le même code!
