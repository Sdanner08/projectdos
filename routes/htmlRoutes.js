var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      db.Ingredients.findAll({}).then(function(dbIngredients) {
        res.render("index", {
          ingredients: dbIngredients,
          msg: "Welcome our Restaurant!",
          examples: dbExamples
        });
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  ////////////
  // Load example page and pass in an example by id
  app.get("/ingredients/:id", function(req, res) {
    db.Ingredients.findOne({ where: { id: req.params.id } }).then(function(
      ingredientInfo
    ) {
      res.render("ingredient", {
        ingredient: ingredientInfo
      });
    });
  });
  //////////////
  // Load ingredients page
  app.get("/ingredients", function(req, res) {
    db.Ingredients.findAll({}).then(function(dbIngredients) {
      res.render("ingredients", {
        ingredients: dbIngredients
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
