let express = require("express"),
routes = express.Router({caseSensitive:true}),
testModel = require("./DataModel/TestModel"),
UserModel = require("./DataModel/UserModel"),
cartModel = require("./DataModel/CartModel"),
productModel = require("./DataModel/ProductModel");

//product routes or product api's
routes.post("/api/saveProduct",(req, res)=>{
    
    let productObj = new productModel(req.body);

    productObj.save((err, data, next)=>{        
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(data);
    });
});

routes.get("/api/getProducts",(req, res)=>{
    productModel.find((err, data, next) =>{
        console.log("Data :", err);

        err ? 
        res.send({"erro": err}) 
        :
        res.send(
            data
        )
    })
});

//cart routes or cart api's
routes.post("/api/saveUserCart",(req, res)=>{
    cartModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        console.log("We Found One - ",cartDbObj);
        if (err){
            console.log("got an error!");            
            res.send(err);
        }
        if (!cartDbObj) {
          console.log("No cartitems Present, Adding!"); 
          let cartObj = new cartModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{
          console.log("No CartItem Present, Replacing!");
          cartDbObj.cart = req.body.cart
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }
  });

});

routes.post("/api/getUserCart",(req, res)=>{
    cartModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});


routes.post("/api/signInUpUser",(req, res)=>{
    console.log(req.body);

    UserModel.findOne({userName: req.body.userName}, (err, userObject) => {
        if (err != null) {
            console.log("Error :", err);
            res.send({"Err":err});
        } else if (userObject) {
            res.json(userObject);
        }else{
           //No user with given user name present then create one 
           //console.log("Body ", req.body);
            let signObjForMongo = new UserModel(req.body);

            // let signObjForMongo = new signInModel({
            //     userName: req.body.userName,
            //     password: req.body.password,
            //     street: req.body.street,
            //     mobile : req.body.mobile
            //   });

            //console.log("No Student Present, Adding!"); 
            signObjForMongo.save((err, data, next)=>{        
                if (err) {
                    res.send("Error Occurred While Siging User "+ err);
                }      
                res.json(data);
            });
        }
    });
})


//Pratice API's
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