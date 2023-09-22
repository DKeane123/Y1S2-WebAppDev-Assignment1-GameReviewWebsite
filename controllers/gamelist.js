'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const gamelistStore = require('../models/genres-store');

const gamelist = {
  index(request, response) {
    const gamelistId = request.params.id;
    logger.debug('Gamelist id = ' + gamelistId);
    const viewData = {
      title: 'Gamelist',
      gamelist: gamelistStore.getGenres(gamelistId),
    };
    response.render('gamelist', viewData);
  },
    deleteGame(request, response) {
    const gamelistId = request.params.id;
    const gameId = request.params.gameid;
    logger.debug(`Deleting Game ${gameId} from gamelist ${gamelistId}`);
    gamelistStore.removeGame(gamelistId, gameId);
    response.redirect('/gamelist/' + gamelistId);
  },
    addGame(request, response) {
    const gamelistId = request.params.id;
    const gamelist = gamelistStore.getGenres(gamelistId);
    const newGame = {
      id: uuid(),
      title: request.body.title,
      developer: request.body.developer,
      review: request.body.review,
    };
    gamelistStore.addGame(gamelistId, newGame);
    response.redirect('/gamelist/' + gamelistId);
  },
};

module.exports = gamelist;