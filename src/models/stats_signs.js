/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_signs', {
    id: {
      type: "BINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    world: {
      type: "BINARY(16)",
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    z: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    spec: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'stats_signs'
  });
};
