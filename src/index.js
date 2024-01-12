const express = require('express')
const {collection,Mood} = require('./config');
// const m = require('./config2');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"))
app.set('view engine','ejs')
app.get('/',(req,res)=>
{ 
    res.render("home1")
});
app.get('/login',(req,res)=>
{
    res.render("login");
})
app.get("/signup",(req,res)=>
{
    res.render("signup")
});
app.get("/mood",(req,res)=>{
    res.render("mood");
})
app.get("/happy",(req,res)=>{
    res.render("happy");
})
app.get("/sad",(req,res)=>{
    res.render("sad");
})
app.get("/angry",(req,res)=>{
    res.render("angry");
})
app.post("/signup",async(req,res)=>{
    const data = {
        name : req.body.username,
        password: req.body.password
    }
    const euser = await collection.findOne({name:data.name});
    if(euser)
    {
        res.send("UserName Already Exists!")
    }
    else{
    const srounds = 10;
    const hpass = await bcrypt.hash(data.password,srounds);
    data.password = hpass;
    await collection.insertOne(data);
    res.render("login");
    }
})
app.post("/login",async(req,res)=>
{
    try{
        const ch = await collection.findOne({name:req.body.username});
        if(!ch)
        {
            res.send("Username Not Exists!");
        }
        const pass = await bcrypt.compare(req.body.password,ch.password);
        if(pass)
        {
            res.render("home",{Login_Signup:req.body.username,});
        }
        else
        {
                res.send("WrongPassword");
        }
    }catch{
        res.send("Wrong Details");
    }
})
app.listen(3000,()=>console.log("Listening on port 3000"));