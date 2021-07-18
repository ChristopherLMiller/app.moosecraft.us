/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_servers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    web_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_installed: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    max_players: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    }
  }, {
    tableName: 'plan_servers'
  });
};
