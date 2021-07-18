/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_config', {
    key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'jobs_config'
  });
};
