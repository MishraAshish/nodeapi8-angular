let mongooseObj = require("mongoose"),

schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/nodeapi8");

let testUserSchema = new schemaObj({
    name: String,
    email: {type:String, required:true},
    age: Number
});

let testModel = mongooseObj.model("testmodel",testUserSchema);

module.exports = testModel;