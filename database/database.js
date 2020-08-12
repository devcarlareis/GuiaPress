const Sequelize = require("sequelize");

const connection = new Sequelize('GuiaPress','root','150896JUa#', {
    host: 'localhost', 
    dialect:'mysql',
    timezone: "-03:00"
});

module.exports = connection;