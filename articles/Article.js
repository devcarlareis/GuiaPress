const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/category"); //primeiro passo para o relacionamento, importe.

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//expressando um relacionamento 1 para muitos no sequelize
Category.hasMany(Article);//hasMany significa "tem muitos", o que eu estou dizendo é "1 categoria tem muitos artigos"


//expressando um relacionamento 1 para 1 no sequelize
Article.belongsTo(Category); //belomgsTo = significa pertende a.. oque eu estou dizendo é "1 artigo pertence a 1 categoria"


module.exports = Article;