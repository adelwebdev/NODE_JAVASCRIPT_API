// dans dossier routes créer fichier postsController.js ; ensuite récupérer framework express (comme suite)
// appel du framework express et utilisation de la const router pr joindre l'objet router de express
const express = require("express");
const router = express.Router();
// pr s'importer les id!! (neçessaire pour les "put")!!! on doit créer ObjectID (comme suite)
const ObjectID = require("mongoose").Types.ObjectId;

// chercher notre modèle de posts (de messages)
const { PostsModel } = require("../models/postsModel");

// faire du CRUD avec notre "router"

// avec get pr afficher contenu de notre DB!!
// get pour ce qui est écrit dans l'url, ici (req, res) sont le "callBack": tu fais req, res (request & response)

router.get("localhost:5050/posts/", (req, res) => {
  //PostsModel.find ; veut dire tu vas nous chercher! ici err et docs (1er paramètre c l'erreur, le second si y'a pas d'erreur tu vas chercher docs)
  PostsModel.find((err, docs) => {
    // console.log(docs);
    // si y a pas d'erreurs tu fais res.send de docs (tu envoies docs sur le navigateur) sinon tu fais un msg d'erreur data
    if (!err) res.send(docs);
    else console.log("error de get data: " + err);
  });
});

// pour poster des choses dans notre DB; ici méthode post!!!!
router.post("/", (req, res) => {
  console.log(req.body);
  // ici newRecord c PostsModel qui est un objet:
  // cela ne marche pas si on n'a pas préalablement téléchargé bodyParser! req.body ne fonctionne qu'avec bodypParser
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });
  // on enregistre la new data (le new post) avec newRecord.save
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating new data : " + err);
  });
});

// avec router.put pr faire des update (méthode put)!! editer les données, update
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  // on se met dans un objet se qui a été envoyé, ici updateRecord
  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };
  // on se récupère l'id du message en question, on dit new:true comme si ça se mettait à jour et on s'envoit le updateRecord
  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error: " + err);
    }
  );
});

// maintenant la partie delete!! fin du crud!
// avec router.delete pr supprimer (méthode delete)!!
router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  // on remove comme suite:
  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Update error: " + err);
  });
});

module.exports = router;
