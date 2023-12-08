const express = require('express');

const db = require('../dbConfig');

const tanahtanaman = express.Router();

tanahtanaman.get("/:id_tanah", async (req, res) => {
    const sql =`
    SELECT tanaman.*
    FROM tanaman
    INNER JOIN kecocokan_tanah_tanaman ON tanaman.id_tanaman = kecocokan_tanah_tanaman.id_tanaman
    WHERE kecocokan_tanah_tanaman.id_tanah = ?
  `;
    const {id_tanah} = req.params;
    db.query(sql,[id_tanah],function(err,result,fields){
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    });
});

module.exports = tanahtanaman;
