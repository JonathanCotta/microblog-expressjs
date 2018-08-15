const express = require("express");
const morgan  = require("morgan");
const router  = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views","./views");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", router);

app.listen(port, () => {
    process.argv.forEach((arg) => {
        if(arg !== "-n" )
            db.sync({force:true});
    });

    console.log(`running at localhost:${port}/task/  press ctrl + c to stop \n`);
});