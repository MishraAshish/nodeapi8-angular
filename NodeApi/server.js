//creating api structure using express
let express = require("express"),
app = express(),
cors = require("cors"),
bodyParser = require("body-parser"),
router = require("./router");

app.locals.port = 9090;

app.use(cors()); //using cors: to allow cross origin requests basically to read and respond to different domains
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'2mb', extended:false}));

app.use("/",router);

app.listen(app.locals.port,"localhost",()=>{
    console.log("We are listening at port : 9090");
})