"use strict";

const logger = require("../utils/logger");
const ceoStore = require('../models/ceo-store.js');


const ceo = {
  index(request, response) {
    logger.info("ceo rendering");

    const viewData = {
      title: "List of Game Ceo's",
      ceos: ceoStore.getAllCeos(),
    };

    response.render("ceo", viewData);
  },
};

module.exports = ceo;
