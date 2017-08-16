var lib = require('./include/lib');
/***************** S E P E R A T O R ********************/


lib.app.set('view engine', 'jade');
lib.app.set('views', __dirname+'/views');

lib.app.use(lib.express.static(lib.path.join(__dirname,'public')));
lib.app.use(lib.bodyParser.urlencoded({ extended: true }));
lib.app.use(lib.bodyParser.json());
lib.app.use(lib.cookieParser());
lib.app.use(lib.session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
/***************** S E P E R A T O R ********************/
lib.fs.readdir(lib.path.join(__dirname,'routes'), function (err, files) {
    files.forEach(function (file) {
        require('./routes/'+file)(lib.app);
    })
});

// catch 404 and forward to error handler.
lib.app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// If our applicatione encounters an error, we'll display the error and stacktrace accordingly.
lib.app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error',{
        error: err
    });
});


/***************** S E P E R A T O R ********************/
lib.app.listen(lib.port, function () {
    console.log("listen to port", lib.port);
});