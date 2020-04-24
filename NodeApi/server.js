//creating api structure using express

let express = require("express"),
//app = express, //just an assignment of express module nothing else
app = express(), //invoking express module to get express application intialized
admin = express();

app.locals.port = 9000;

app.get('/helloworld', (req, res)=>{
    console.log(req.query);
    res.send({msg:'Hello World',queryString :req.query}); 
});

app.get('/article/:id', function(req , res){ //dynamic api's
    console.log(req.params);
    res.send('article' + req.params.id);  
})

app.get('/html', (req, res)=>{
    res.send(`<h1>This is new place to learn express</h1>
    <h2>Printing new H2 tag to test nodemon</h2>`); 
});

app.get('/json', (req, res)=>{
    res.json({
        name:"Richard",
        city:"Texas"
    }); 
});

app.post('/helloworld2', (req, res)=>{
    res.send('Hello World'); 
});

app.use("/admin",admin);

app.get('/', (req, res)=>{
    res.send('Hello World Default'); 
});

app.get('*', (req, res)=>{
    res.locals.params = req.params;
    res.send("File Path"); 
});

admin.get("/hello", (req, res)=>{
    res.send('Hello World From Admin'); 
});

admin.get("/goodbye", (req, res)=>{
    res.send('Good Bye From Admin'); 
});

app.listen(app.locals.port,"localhost",()=>{
    console.log("We are listening at port : 9000");
})