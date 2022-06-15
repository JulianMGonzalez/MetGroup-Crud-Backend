import { User } from './User.js';
import { Store } from './Store.js';
import { Article } from './Article.js';
import { storeArticles } from './storeArticle.js';

User.hasMany(Store);
Store.belongsTo(User);

Store.belongsToMany(Article, { through: storeArticles });
Article.belongsToMany(Store, { through: storeArticles });