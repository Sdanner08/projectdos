module.exports = function(sequelize, DataTypes) {
  var RecipeIngredient = sequelize.define("RecipeIngredient", {
    ExampleId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  });
  return RecipeIngredient;
};
