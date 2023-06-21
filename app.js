const express = require('express')
const morgan = require("morgan")
const erros = require("./utils/erros"); 
const router = require("./routes/gift-exchange"); 

const app = express()

app.use(morgan("tiny")) 
app.use(express.json()); 
app.use(`/gift-exchange`, router)

app.get("/", (req, res) => {
    res.json({
        "ping": "pong",
    })
    // res.sendStatus(200); 
})

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500; 
    const errorMessage = error.message || "Something went wrong in the application"
    return res.status(errorStatus).json({
        error:{errorMessage}})

})

module.exports = app