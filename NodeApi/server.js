//creating api structure using express


let express = require("express"),
app = express(),
webProject = express(),
cors = require("cors"),
bodyParser = require("body-parser"),
router = require("./router");

app.locals.port = 9090;

app.use(cors()); //using cors: to allow cross origin requests basically to read and respond to different domains
app.use(bodyParser.urlencoded({extended:false}));
app.use('/static', express.static('webProject/app'));
app.use('/images', express.static('webProject/images'));
app.use(bodyParser.json({limit:'2mb', extended:false}));

app.use("/WebApp",webProject);

// console.log("Path : ", __dirname+'webProject/app');
//app.use('/static/*', express.static( __dirname+'public'));

app.use("/",router);

webProject.get("/app", (req, res)=>{
    res.sendFile(__dirname+"/webProject/index.html")
});

// webProject.get("/WebApp/app/bundle.js", (req, res)=>{
//     res.sendFile(__dirname+"/webProject/app/bundle.js")
// });

app.listen(app.locals.port,"localhost",()=>{
    console.log("We are listening at port : 9090");
})