var Sequelize = require('sequelize')
    , lodash    = require('lodash')
    , fs = require('fs')
    , path = require('path')
    , sequelize = new Sequelize('nodejs', 'root', '123',{
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})
    , db = {};

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
        db[modelName].options.associate(db)
    }
});

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);