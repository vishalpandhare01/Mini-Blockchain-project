const { default: mongoose } = require("mongoose");
const CryptoData =  mongoose.Schema({
    symbol:{ type: String , unique:true},
    name:{ type: String , unique:true},
    marketCapUsd:{ type: String },
    priceUsd:{ type: String },  
})

module.exports=mongoose.model('CryptoCllection',CryptoData)

