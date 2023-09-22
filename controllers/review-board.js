"use strict";

const logger = require("../utils/logger");
const uuid = require('uuid');
const gameGenresStore = require("../models/genres-store.js");

const listOfGenres  = {
  index(request, response) {
    logger.info("game genres rendering");

    const viewData = {
      title: "Game Review App genres",
      genres: gameGenresStore.getAllGenres(),
    };

    
    logger.info("about to render", viewData.genres);
    response.render("genres", viewData);   
  },
  
  deleteGenre(request, response) {
    const genreId = request.params.id;
    logger.debug(`Deleting Genre ${genreId}`);
    gameGenresStore.removeGenre(genreId);
    response.redirect('/listOfGenres');
  },
  
    addGenre(request, response) {
    const newGenre = {
      id: uuid(),
      title: request.body.title,
      description : request.body.title,
      games: [],
    };
    gameGenresStore.addGenre(newGenre);
    response.redirect('/listOfGenres');
  },
  
};



module.exports = listOfGenres;
