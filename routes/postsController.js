// dans dossier routes créer fichier postsController.js ; ensuite récupérer framework express (comme suite)
// appel du framework express et utilisation de la const router pr joindre l'objet router de express
const express = require("express");
const router = express.Router();

// chercher notre modèle de posts (de messages)
const { PostsModel } = require("../models/postsModel");

// pr afficher contenu de notre DB!!
// get pour ce qui est écrit dans l'url, le callBakc: tu fais req, res (request & response)
router.get("localhost:5050/posts/", (req, res) => {
  //PostsModel.find ; veut dire tu vas nous chercher! ici err et docs (1er paramètre c l'erreur, le second si y'a pas d'erreur tu vas chercher docs)
  PostsModel.find((err, docs) => {
    // console.log(docs);
    // si y a pas d'erreurs tu fais res.send de docs (tu envoies docs sur le navigateur) sinon tu fais un msg d'erreur data
    if (!err) res.send(docs);
    else console.log("error de get data: " + err);
  });
});
module.exports = router;

// faire du CRUD avec notre "router"
