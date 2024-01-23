var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')

var indexRouter = require('./routes/index.routes');
var usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes')

const checkLocalSession= require('./middlewares/checkSessionLocal');

const session = require('express-session')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());

/*formularios*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())


/* soporte para métodos PUT,PATCH & DELETE */
.use(methodOverride('_method'))

/*recursos estaticos*/
app.use(express.static(path.join(__dirname,'..', 'public')));

/* soporte para métodos PUT, PATCH & DELETE*/ 
app.use(methodOverride('_method'))

app.use(session({
  secret: 'grupo_5',
  resave: false, 
  saveUninitialized: false 
}))

app.use(checkLocalSession)

/*rutas*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const port=3000
console.log(`server running http://localhost:${port}`);


module.exports = app;
