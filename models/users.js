/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    username: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      field: 'username'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'password'
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0',
      field: 'is_active'
    }
  }, {
    tableName: 'users'
  });
};
