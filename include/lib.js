var express = require('express');
var app = express();
var port = process.env.port || 8787 ;
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var dbConnection = require('../models');




module.exports =  {
    express: express,
    fs: fs,
    app: app,
    port: port,
    path: path,
    bodyParser: bodyParser,
    cookieParser: cookieParser,
    session: session,
    dbConnection: dbConnection
};