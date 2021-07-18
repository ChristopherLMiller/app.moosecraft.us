/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_log', {
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
    time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    itemname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    money: {
      type: "DOUBLE",
      allowNull: true
    },
    exp: {
      type: "DOUBLE",
      allowNull: true
    },
    points: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'jobs_log'
  });
};
