import * as dotenv from 'dotenv';
dotenv.config();
import {Request,Response,NextFunction,Application} from 'express';
const express = require('express');
const bodyParser = require("body-parser");
import cors from 'cors';
const app: Application = express();

app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:true,parameterLimit:50000}));
//app.use(cors({origin:corsUrl,optionsSuccessStatus:200}))

const port = process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`server running on port : ${port}`);
})
.on('error',e => console.log("ERROR:",e));
