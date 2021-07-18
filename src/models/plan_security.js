/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_security', {
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    salted_pass_hash: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    permission_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'plan_security'
  });
};
