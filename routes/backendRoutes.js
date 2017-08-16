module.exports = function (app) {

    var loginModule = require('../controllers/login');
    app.use('/login', loginModule.login);
    app.use('/register', loginModule.register);
    app.use('/admin', loginModule.admin);

};