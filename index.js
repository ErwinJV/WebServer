require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();

const port = process.env['PORT'];

const viewsPath = path.join(__dirname, "/public/views");

app.set("views", viewsPath);

const hbs = require("hbs");

hbs.registerPartials(__dirname +'/public/views/partials',(e)=>{
if(e){
   console.log('Error with partials: ',e)
}
})

const params = {
  title: "Curso de node",
  name: "Fernando Herrera",
}

app.set("view engine", "hbs");
// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", params);
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname +'/public/home.html');
// });

app.get("/generic", (req, res) => {
  res.render('generic',params);
});

app.get("/elements", (req, res) => {
  res.render('elements',params);
});

app.get("*", (req, res) => {
  res.render('404',params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
