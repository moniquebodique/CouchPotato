module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return User;
};
