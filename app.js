const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 3000
const user=require('./route/users');
const home=require('./route/index');
//app.use(express.static(path.join(_dirname,"public")));

app.use("/user",user);
app.use("/",home);

app.get("/",function(req,res){
    res.send("home");
});

app.listen(port,()=>{
    console.log("app listning to port "+port);
})