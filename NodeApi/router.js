let express = require("express"),
routes = express.Router({caseSensitive:true}),
testModel = require("./DataModel/TestModel");

routes.get('/testuser',(req, res)=>{
    let qs = req.query;
    
    //use the model to save data to mongodb
    let userObj = new testModel({
        name:req.query.name,
        email:req.query.email,
        age:req.query.age
    })

    console.log(userObj);

    userObj.save((err, data)=>{
        console.log("err - ", err);
        console.log("data - ", data);
        if (err != null) {
            res.send("Unable to save data! "+ err);
        } else {
            testModel.find((err, dataAll)=>{
                res.send(dataAll);
            })   
        }
    })

    //res.json(qs); 
});

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