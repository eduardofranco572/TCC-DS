const bodyParser = require('body-parser');
const usuarios = require('./usuariosRoute');
const logger = require("morgan");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

module.exports = app => {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(session({
    secret: "mN3.vT2*dX",
    resave: false,
    saveUninitialized: true,
  }
  ));
  app.use(usuarios);
  app.use(function (req, res, next) {
    res.render("error404", { url: req.url });
  });
  app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
  });

}