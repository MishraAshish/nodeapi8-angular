let express = require("express"),
routes = express.Router({caseSensitive:true});

routes.get('/helloworld', (req, res)=>{
    res.send({msg:'Hello World',queryString :req.query}); 
});

routes.get('/article/:id', function(req , res){ //dynamic api's
    console.log(res);
    res.status = "ASDASd";
    res.clearCookie();
    res.send('article' + req.params.id);  
})

routes.get('/html', (req, res)=>{
    res.send(`<h1>This is new place to learn express</h1>
    <h2>Printing new H2 tag to test nodemon</h2>
    <p><b>We are getting response from router module</b></p>`); 
});

routes.get('/', (req, res)=>{
    res.send('Hello World Default'); 
});

routes.get('*', (req, res)=>{ //wild card operator
    res.locals.params = req.params;
    //res.json({"asd":'Hello World Default'}); 
    res.send('Hello World Default'); 
    res.sendFile(__dirname+"/package.json");
});


module.exports = routes;