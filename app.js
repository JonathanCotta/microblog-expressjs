const express = require("express");
const morgan  = require("morgan");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

const port = process.env.PORT || 3000;

const router  = require("./routes");
const config = require("./config");

app.set("view engine", "pug");
app.set("views","./views");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 3600*1000
    },
    store: new sequelizeStore({ db: config.database})
}));

app.use("/", router);

app.listen(port, () => {
    process.argv.forEach((arg) => {
        if(arg !== "-n" )
            db.sync({force:true});
    });

    console.log(`running at localhost:${port}/task/  press ctrl + c to stop \n`);
});