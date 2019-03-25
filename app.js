var express               = require("express"),
    app                   = express(),
    bodyParser = require('body-parser'),
    todoRoute = require("./routes/todos");
    
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("index");
});
app.use("/api/todos", todoRoute); 

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server connected");
});