/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_limits', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    collected: {
      type: "DOUBLE",
      allowNull: true
    },
    started: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    typeid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'jobs_limits'
  });
};
