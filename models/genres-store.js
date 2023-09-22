"use strict";

const _ = require("lodash");
const JsonStore = require('./json-store');

const genresStore = {
  
  store: new JsonStore('./models/genres-store.json', { genresCollection: [] }),
  collection: "genresCollection",                 

  getAllGenres() {
    return this.store.findAll(this.collection);
  },

  getGenres(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },
  
  addGenre(genre) {
    this.store.add(this.collection, genre);
  },
  
  removeGenre(id) {
    const genre = this.getGenres(id);
    this.store.remove(this.collection, genre);
  },
  
  removeAllGenres() {
    this.store.removeAll(this.collection);
  },
  
  addGame(id, game) {
    const gamelist = this.getGenres(id);
    gamelist.games.push(game);
  },
  
  removeGame(id, gameId) {
    const genres = this.getGenres(id);
    const games = genres.games;
    _.remove(games, { id: gameId });
  },   
    
};

module.exports = genresStore;
