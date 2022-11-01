const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const { handlebars } = require('hbs');
//built in middleware
// app.use(express.static(staticPath));
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));created a path using file sytem 
// const staticPath = path.join(__dirname, "../public");
// const viewPath = path.join(__dirname, "../views");
const viewPath = path.join(__dirname, "../template/views");
const partPath = path.join(__dirname, "../template/partials");

//to set the view engine
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partPath);
// app.use(express.static(staticPath));
//template engine route
app.get("", (req, res) => {
    res.render('index', { refreshName: "Wow" });
})
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/project", (req, res) => {
    res.render('project');
})
app.get("/contact", (req, res) => {
    res.render('contact');
})
app.get("*", (req, res) => {
    res.render('404');
})

app.listen(3000, () => {
    console.log('app is listening on port no. 3000');
})