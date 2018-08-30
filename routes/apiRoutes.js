var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      console.log(dbExample.id);
      console.log(req.body.ingredients);
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
  ///////////////////////////////////////////////////
  app.get("/api/ingredients", function(req, res) {
    db.Ingredients.findAll({}).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });

  // Create a new example
  app.post("/api/ingredients", function(req, res) {
    db.Ingredients.create(req.body).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });

  // Delete an example by id
  app.delete("/api/ingredients/:id", function(req, res) {
    db.Ingredients.destroy({ where: { id: req.params.id } }).then(function(
      dbIngredients
    ) {
      res.json(dbIngredients);
    });
  });
};
