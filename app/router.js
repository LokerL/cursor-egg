"use strict";

module.exports = (app) => {
  app.router.post("/", "httpclient.conversation");
  app.router.post("/test", "httpclient.test");
};
