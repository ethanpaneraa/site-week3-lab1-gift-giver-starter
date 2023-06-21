const express = require("express");
const router = express.Router();
const giftExchangeModel = require("../models/gift-exchange"); 
const errorMessage = require("../utils/erros")

router.post("/pairs", async (req, res, next ) => {
    try {
        const pairs = giftExchangeModel.pairs(req.body.names)
        res.status(200).json(pairs)
    } catch (error) {
        next(new errorMessage(error))
    }
        
})

router.post("/traditional", async (req, res, next) => {

    try {
        const pairs = giftExchangeModel.traditional(req.body.names); 
        res.status(200).json(pairs)
    } catch (error) {
        next(new errorMessage(error)); 
    }
})



module.exports = router; 