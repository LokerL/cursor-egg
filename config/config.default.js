"use strict";

exports.security = {
  csrf: false,
  domainWhiteList: ["*"],
  credentials: true,
};
exports.cors = {
  origin: "*",
  allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
};
