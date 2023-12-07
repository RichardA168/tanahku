const express = require('express');
const db = require('../dbConfig');

const data = express.Router();

data.get("/", async (req,res)=>{
    const sql="SELECT * FROM tanaman";
    db.query(sql,function(err,result,fields){
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

data.get("/:id_tanaman", async (req,res)=>{
    const sql="SELECT * FROM tanaman where id_tanaman =?";
    const id_tanaman = req.params.id_tanaman;
    db.query(sql,[id_tanaman],function(err,result,fields){
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});



module.exports = data;