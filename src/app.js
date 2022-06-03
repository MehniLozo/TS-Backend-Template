"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var express_1 = require("express");
var bodyParser = require("body-parser");
var app = express_1["default"]();
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlendcoded({ limit: '20mb', extended: true, parameterLimit: 50000 }));
//app.use(cors({origin:corsUrl,optionsSuccessStatus:200}))
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("server running on port : " + port);
})
    .on('error', function (e) { return console.log("ERROR:", e); });
