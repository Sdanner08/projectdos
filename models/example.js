module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Example.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Example.belongsToMany(models.Ingredients, {
      through: models.RecipeIngredient
    });
  };
  return Example;
};
