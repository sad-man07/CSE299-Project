const express= require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

//view engine
app.set('view engine','ejs');

//setup routes
app.use('/auth',authRoutes);

//home route
app.get('/',(req,res)=>{
    res.render('home');
});


app.listen(3000,() =>{
    console.log('app now listening for requests on port 3000');
});