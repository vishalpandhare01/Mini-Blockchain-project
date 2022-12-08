const express = require('express')
const route = express.Router()
const cryptocontroller = require('../controller/cryptocontroller') 
const cryptoModel = require('../model/cryptoModel')

route.get("/" ,async (_,response)=>{
    let data = await cryptocontroller.getAssets()

    const promises = data.map((c)=>{
        return cryptoModel.findOneAndUpdate(
            {name:c.name},
            {$set : c},
            {upsert:true,new:true}
        )
    })
    Promise.all(promises).then((data)=>{ //all pending code catch promise.all
        response.json({data})
    })
});

module.exports = route