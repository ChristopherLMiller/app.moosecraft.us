/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_worlds', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    world_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    server_uuid: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    tableName: 'plan_worlds'
  });
};
