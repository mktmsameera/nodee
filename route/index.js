const express=require('express');
const router=express.Router();
//const connection=require('../config/connection');
/*
router.get("",function(req,res){

    connection.query('select * from nodedb',function (err,rows){
        if (err) throw err;
        //console.log(rows);
        //res.send(rows);
        rows.forEach(element => { 
            console.log(element.name); 
          }); 
        
    });
    */
    res.send("hello");

    
});

module.exports=router;
