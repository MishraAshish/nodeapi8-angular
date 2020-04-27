//creating api structure using express
let express = require("express"),
app = express(),
router = require("./router");

app.locals.port = 9000;

app.use("/",router);

app.listen(app.locals.port,"localhost",()=>{
    console.log("We are listening at port : 9000");
})