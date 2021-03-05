//  @author: Dominic Bruno
//  @app: Health Insurance Risk Calculator
//  @course: Software Engineering (Proff. Pogue), Spring 2021 | Lewis University
//  @contact: dominicmbruno@lewisu.edu

const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const port = process.env.PORT || 3000;

const app = express();

//  HBS (ext) - Handlebars View Engine
//  @ Local DIR - 'view'
app.engine('.hbs', handlebars({ 
    defaultLayout: 'main', 
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//  Static Files @ Local DIR - 'src'
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', require('./routes/index.js'));



app.listen(port, (req, res) => {
    console.log(`App running on server: ${port}`);
});