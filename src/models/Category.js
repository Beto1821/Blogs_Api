module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'category',
      underscored: true,
    }
  );

  return Category;
};