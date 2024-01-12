const mong = require('mongoose')
const connect=mong.connect("mongodb://localhost:27017/Login-tut")

connect.then(()=>
{
    console.log("Connected");
})
.catch(()=>
{
    console.log("Not Connected");
})

const ls= new mong.Schema({
    name:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    }
});


const coll = new mong.model("users",ls);
module.exports =coll;