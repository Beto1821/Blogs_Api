module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.STRING,
      },
      published: {
        type: DataTypes.STRING,
      },
      updated: {
        type: DataTypes.STRING,
      },         
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    }
  );

    BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'id', as: 'BlogPostId' });
  };

  return BlogPost;
};