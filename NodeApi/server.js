//creating api structure using express

let express = require("express"),
app = express(); //invoking express module to get express application intialized

app.get('/helloworld', (req, res)=>{
    res.send('Hello World'); 
});

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

app.get('/', (req, res)=>{
    res.send('Hello World Default'); 
});

app.get('*', (req, res)=>{
    res.send("File Path"); 
});

app.listen(9000,"localhost",()=>{
    console.log("We are listening at port : 9000");
})