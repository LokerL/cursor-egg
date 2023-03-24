"use strict";

module.exports = (app) => {
  app.beforeStart(async () => {
    app.logger.info("Curser web api");
  });
};
