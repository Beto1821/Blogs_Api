module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,        
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,        
      },
    },
    {
      timestamps: false,
      tableName: 'postCategory',
      underscored: true,
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'category',
      through: PostCategory,
      foreignKey: 'category_id', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'post_id', // se refere a outra chave de `users_books` 
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogpost',
      through: PostCategory,
      foreignKey: 'post_id',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'category_id',
    });
  };

  return PostCategory;
};