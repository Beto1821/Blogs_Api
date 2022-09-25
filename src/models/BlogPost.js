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
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },         
    },
    {
      timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
      tableName: 'blog_posts',
      underscored: true,
    }
  );

    BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE', 
      foreignKey: 'user_id',
      as: 'user', 
    });
  };

  return BlogPost;
};