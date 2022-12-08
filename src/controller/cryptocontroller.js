// Your key: ccfe0638-c51d-4418-b112-828a92e00012
// Expires on 7/12/2033

const { default: axios } = require('axios')
const cryptoModel = require('../model/cryptoModel')
const url = "https://api.coincap.io/v2/assets"

module.exports.getAssets = async ()=>{
    const response = await axios.get(url)
    return response.data.data.sort(
        (c1,c2)=>{
        return  c1.changePercent24Hr - c2.changePercent24Hr
        })
        .map((c)=>{
            const {priceUsd, symbol,name ,marketCapUsd,changePercent24Hr}=c
            return {priceUsd, symbol,name ,marketCapUsd,changePercent24Hr}
        })
}
