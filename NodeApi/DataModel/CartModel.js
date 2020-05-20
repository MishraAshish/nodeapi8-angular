let mongooseObj = require("mongoose"); // need a connection creator and which also provides helper method

mongooseObj.connect("mongodb://127.0.0.1/nodeapi8");

let Schema = mongooseObj.Schema; //

let CartSchema = new Schema(
    { 
        userid: String,
        cart : Object
    },
    {
        versionKey: false
    }
    );

let CartSchemaModel = mongooseObj.model('cart', CartSchema);

module.exports = CartSchemaModel;