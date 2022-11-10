const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
const path = require('path');

const viewPath = path.join(__dirname, '../templates/views');
// console.log(publicStaticPath);
const partialPath = path.join(__dirname, "../templates/partials");
const publicStaticPath = path.join(__dirname, "public");
app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicStaticPath));
hbs.registerPartials(partialPath);

//for using static website



// app.get(route,callback);
//routing
var r = '';
app.get('/favicon.ico', (req, res) => res.status(204));
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/weather", (req, res) => {
    res.render('weather');
});
app.get("*", (req, res) => {
    r = req.originalUrl.split('/')[1];
    res.render('404');
});
console.log(r);
console.log('hey'); 


//listening
app.listen(port, () => {
    console.log('listening to the port no. 3000');
})