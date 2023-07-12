const express = require("express")
const app = express()

const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")

const routes = require("./routes/index.js")
require("dotenv").config()
const port = process.env.PORT || 3000;

const nodemailer = require("nodemailer")

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ericwithc-portfolio.vercel.app/');
    next();
});

app.use("/", routes)

app.listen(port, () => {
    console.log(`Server listen in port ${port}`);
})