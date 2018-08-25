module.exports = function(sequelize, DataTypes) {
  var Ingredent = sequelize.define("Ingredent", {
    text: DataTypes.STRING
  });
  return Ingredent;
};
