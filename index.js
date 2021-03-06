// on commence: appel de la console nmp: on tape; npm init -y (dire oui à tout) (cela crée le package.json)
// ensuite on download express et nodemon ; npm i -s express nodeomon
// express: framework nodeJS (diminue les lignes de codes lorsqu'on fait appel au server)
// nodemon est un packet qui permet de mettre à jour le server à chaque enregistrement
// dans package.json; on change "test": "echo \"Error: no test specified\" && exit 1" par "npm start": "nodemon index.js" pour la config de npm start
// on fait: npm start ; pr faire tourner nodemon sur index.js
// installation de bodyParser: npm i -s body-parser

// on appelle express; comme suite
const express = require("express");
const app = express();

// de cette façon: on passe dbConfig à index.js
require("./models/dbConfig");

// on veut que notre Router soit accessible dans l'index.js
const postsRoutes = require("./routes/postsController.js");

// on appelle bodyParser dans cet ordre!! faut respecter l'ordre ici!!! (refaire même fichier!)
const bodyParser = require("body-parser");

// d'abord on s'appelle mongoose
const mongoose = require("mongoose");

// on fait un middleware pour éviter les dépressiation avec findByIdAndUpdate et findByIdAndDelete
// parce que dans la console, ils nous ont demandé de mettre useFindAndModify sur false (voir ci-bàs comment faire)

// appeller cors ici (pr: notre API disponible depuis tt internet) faut respecter l'ordre du codage
// on s'appelle cors au debut / const cors = require("cors")
// faut mettre le middleware de cors avant app.use("/posts", postsRoutes);
// cors permet à notre api d'être accesible sur internet de n'importe où!
// npm i -s cors pr installer cors
const cors = require("cors");

mongoose.set("useFindAndModify", false);

// ici appelle de bodyParser; on en a besoin pour faire req.body dans postsController
app.use(bodyParser.json());

// on mettant cors (); comme ça; ça veut dire on ouvre les portes à tt le monde (internet)
// si on veut que (ex: codepen qui a accés à notre api) alors: app.use(cors({origin: "https://cdpn.io"}));
app.use(cors());

// on se crée un MIDDLEWARE (une fct qui va ecouter chaque changement sur req (request) et res (response))
// surveille si l'appli est sur "/" alors envoie postsRoutes sachant que: const postsRoutes = require("./routes/postsController.js");
// comme ceci les posts s'affichent dans localhost:5050/posts ; faut ajouter aussi le chemin entres " " dans : postsController; router.get(" ", (req,res))
app.use("/posts", postsRoutes);

// mainteant se connecter au server; avec express comme suite; on port 5500 tu écoutes se qui s'y passe
// on insère un callBack; ici : () => {console.log("server started: 5500");}
// il faut un DB, on crée des models; dans models: dbConfig.js
app.listen(5500, () => {
  console.log("server started: 5500");
});

// maintenant faut MongoDB et MongoDB Compass; le configurer et le lancer
// on fait (dans compass) Create Database (possible d'insérer des data en brute "comme dans file mongo.db")
// mainteant créer une connection à cette DB; la configurer! (voir models)
// d'abord faut installer mongoose: npm i -s mongoose
