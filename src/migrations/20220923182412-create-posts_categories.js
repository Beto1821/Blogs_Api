'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

     queryInterface.createTable('posts_categories', {
      post_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      },
      category_id: {
        primaryKey: true,
        allowNull: false,        
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      },
     });
    
  },

  down: (queryInterface, _Sequelize) => queryInterface.dropTable('posts_categories')
};
