/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_Maps', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    WorldID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    MapID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    Variant: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    ServerID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'dynmap_Maps'
  });
};
