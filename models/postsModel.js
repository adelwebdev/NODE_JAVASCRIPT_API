// pr créer un modèle à la DB; créer fichier postsModel.js
// d'abord appler mongooose
const mongoose = require("mongoose");

// ici modèle de DB qui sera stocké dans PostsModel
// en premier: nom de la DB , en dernier: la table (ici posts), au milieu: tout ce qui a à l'intérieur
const PostsModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Data,
      default: Date.now,
    },
  },
  "posts"
);

// aprés création du postsModel, il faut l'exporter (faire comme suite)
module.exports = { PostsModel };

// maintenant il nous faut des controllers! ; créer dossier routes (ou controllers)
// dans routes ; créer postsController
