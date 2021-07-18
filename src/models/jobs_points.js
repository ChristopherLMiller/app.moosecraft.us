/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs_points', {
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
    totalpoints: {
      type: "DOUBLE",
      allowNull: true
    },
    currentpoints: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'jobs_points'
  });
};
