const express = require('express');
const db = require('../dbConfig');

const datatanah = express.Router();


datatanah.get ("/", async (req,res)=>{
    const sql="SELECT * FROM tanah";
    db.query(sql,function(err,result,fields){
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

datatanah.get("/:id_tanah", async (req,res)=>{
    const sql="SELECT * FROM tanah where id_tanah =?";
    const id_tanaman = req.params.id_tanah;
    db.query(sql,[id_tanaman],function(err,result,fields){
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

module.exports= datatanah;