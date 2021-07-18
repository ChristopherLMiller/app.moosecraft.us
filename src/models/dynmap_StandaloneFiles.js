/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dynmap_StandaloneFiles', {
    FileName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ServerID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'dynmap_StandaloneFiles'
  });
};
