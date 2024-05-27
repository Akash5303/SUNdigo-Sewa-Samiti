const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


const app = express();
const connectDB = require('./config/mongo.js');
connectDB();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false 
}));

app.use(function (req, res, next) {
    app.locals.session = req.session;
    next();
});

require("./routes/main_route")(app);

let port = process.env.PORT;

// if(port == null || port == ""){
    // port = process.env.PORT;

app.listen(port,function(){
    console.log("Server has started on port",port);
});