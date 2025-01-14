const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const routeIndex = require("./routes/routeIndex")
var cookieParser = require('cookie-parser')
const cors = require('cors')
require("dotenv").config()
const PORT =process.env.PORT || 4000;


dbConnect();
app.use(cors({credentials: true,
    origin: 'http://127.0.0.1:5500'

 }))
app.use(cookieParser());
app.use(express.json());

app.use("/api",routeIndex)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully at ${PORT}`);
})