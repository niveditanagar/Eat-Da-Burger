var express = require("express");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

//static content of the public folder 
app.use(express.static(__dirname + "/public"));

//parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// //sending index view to main.handlebars:
// app.get('/', function(req, res){
//   res.render('index');
// });

// Importing routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


  


