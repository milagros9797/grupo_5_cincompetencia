/*requires*/
const express = require('express');
const path = require('path');

/*settings*/
const app = express();
const PORT = 3030;

const indexRoutes = require('./routers/index.routes');
const usersRoutes = require('./routers/users.routes');
const productsRoutes = require('./routers/products.routes');


app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));




/*routes*/
app.get('/',indexRoutes);
app.get('/users',usersRoutes);
app.get('/products',productsRoutes);



app.get('/header', (req,res) => res.sendFile(path.join(__dirname, 'views', 'partials' , 'header.html')));



/*port*/
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))