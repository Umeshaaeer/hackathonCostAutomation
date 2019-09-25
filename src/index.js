'use strict';
const XLSX = require('xlsx');
const express = require("express");

var bodyParser = require("body-parser");

var http = require('http');
var ejs = require('ejs');
const app = express();

var exceltojson = require("xls-to-json-lc");

app.set("view engine", "ejs");
app.use(express.json());

//3030 may not be available on any other server, hence if 3030 is not availabe default port will be taken
const port = process.env.PORT || 3030;


//Home Page
app.get("/", (req, res) => {
    res.render('pages/home');
})

//Get RTS Data from Excel
app.get("/RTSData", (req, res) => {

    const excelToJson = require('convert-excel-to-json');

    const result = excelToJson({
        sourceFile: '../assets/RTS/RTS.xlsx'
    });


    const result1 = excelToJson({
        sourceFile: '../assets/BLISS/BLISS.xlsx'
    });


    var jsons = new Array();
    jsons.push(result);
    jsons.push(result1);

    var RTSArray = [];
    RTSArray = excelToJson({
        sourceFile: '../assets/RTS/RTS.xlsx'
    });

    var BlissArray = [];
    BlissArray = excelToJson({
        sourceFile: '../assets/BLISS/BLISS.xlsx'
    });

    var FinalArray = [];

    console.log(result);
    res.send(result);

});

//Get Bliss Data from Excel
app.get("/BlissData", (req, res) => {
    const excelToJson = require('convert-excel-to-json');
    const result1 = excelToJson({
        sourceFile: '../assets/BLISS/BLISS.xlsx'
    });
    console.log(result1);
    res.send(result1);
});

//Start Server locally
app.listen(port, () => {
    console.log("server started at port: " + port);
})

