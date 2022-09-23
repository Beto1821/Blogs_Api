module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },      
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  );

  return User;
};