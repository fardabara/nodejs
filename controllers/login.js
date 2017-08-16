var lib = require('../include/lib');
/********************************/
exports.login = function (req, res) {
    var params = JSON.parse(JSON.stringify(req.body));
    if (req.method == 'POST') {
        lib.dbConnection.users.find({where: {username: params.username, password: params.password}}).then(function (userFind) {
            if(userFind){
                res.redirect('admin');
            }else{

                res.status(400).json({'error':'User already exists.'});
            }
        }).catch(function (error) {
            console.log("an error: ",error);
        })
    }else if(req.method == 'GET'){
        res.render('backend/login');
    }
};
/********************************/
exports.register = function (req, res) {
    if (req.method == 'POST') {
        var params = JSON.parse(JSON.stringify(req.body));
        if(params.password == params.password2){
            lib.dbConnection.users.create(params).then(function (registerUser) {
                res.redirect('/login');
            }).catch(function (error) {
                console.log("an error: ",error);
            })
        }else{
            console.log("password is not match");
        }
    }else if(req.method == 'GET'){
        res.render('backend/register');
    }
};
/********************************/
exports.admin = function (req, res) {
    if (req.method == 'POST') {


    }else if(req.method == 'GET'){
        res.render('backend/admin');
    }
};
