module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    text: DataTypes.STRING,
    quanity: DataTypes.INTEGER,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER
  });
  Ingredients.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Ingredients.belongsToMany(models.Example, {
      through: models.RecipeIngredient
    });
  };
  return Ingredients;
};
