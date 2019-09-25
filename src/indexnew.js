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

//Home Page
app.get("/", (req, res) => {
    res.render('pages/index');
})

app.get("/RTSData", (req, res) => {
    var XLSX = require('xlsx');
    var workbook = XLSX.readFile('../assets/RTS/RTS.xlsx');
    var sheet_name_list = workbook.SheetNames;

    sheet_name_list.forEach(function (y) {
        var array = workbook.Sheets[y];

        var first = array[0].join()
        var headers = first.split(',');

        var jsonData = [];

        for (var i = 1, length = array.length; i < length; i++) {

            var myRow = array[i].join();
            var row = myRow.split(',');

            var data = {};
            for (var x = 0; x < row.length; x++) {
                data[headers[x]] = row[x];
            }
            jsonData.push(data);
            console.log(jsonData);
            res.send(jsonData);

        }
    });


});


app.listen(3030, () => {
    console.log("server started at 3030");
})

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

//Home Page
app.get("/", (req, res) => {
    res.render('pages/home');
})
    
app.get("/RTSData", (req, res) => {

    // var workbook = XLSX.readFile('../assets/RTS.xlsx');// ./assets is where your relative path directory where excel file is, if your excuting js file and excel file in same directory just igore that part
    // var sheet_name_list = workbook.SheetNames; // SheetNames is an ordered list of the sheets in the workbook
    // data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]); //if you have multiple sheets
    // var obj = {};
    // var i=0;
    // for (var key in data) {
    //     console.log(data[key]['ENV']);
    //     obj[i]=data[key]['ENV'];
    //     i=i+1;
    // }
    // res.send(obj);

   
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
RTSArray=excelToJson({
    sourceFile: '../assets/RTS/RTS.xlsx'
});

var BlissArray=[];
BlissArray=excelToJson({
    sourceFile: '../assets/BLISS/BLISS.xlsx'
});

var FinalArray=[];

// RTSArray.forEach(function(obj, index){
//     FinalArray.push(_.extend(obj,  BlissArray[index]));
//   });

  //const rst=result+result1;



console.log(result);
res.send(result);
//   exceltojson({
//     input: "pass the input excel file here (.xls format)",
//     output: "if you want output to be stored in a file",
//     sheet: "sheetname",  // specific sheetname inside excel file (if you have multiple sheets)
//     lowerCaseHeaders:true //to convert all excel headers to lowr case in json
//   }, function(err, result) {
//     if(err) {
//       console.error(err);
//     } else {
//       console.log(result);
//       //result will contain the overted json data
//     }
//  });

});


app.get("/BlissData", (req, res) => {
   
const excelToJson = require('convert-excel-to-json');

// const result = excelToJson({
//     sourceFile: '../assets/RTS/RTS.xlsx'
// });


const result1 = excelToJson({
    sourceFile: '../assets/BLISS/BLISS.xlsx'
});


// var jsons = new Array();
// jsons.push(result);
// jsons.push(result1);

// var RTSArray = [];
// RTSArray=excelToJson({
//     sourceFile: '../assets/RTS/RTS.xlsx'
// });

// var BlissArray=[];
// BlissArray=excelToJson({
//     sourceFile: '../assets/BLISS/BLISS.xlsx'
// });

// var FinalArray=[];

console.log(result1);
res.send(result1);

});


app.listen(3030, () => {
    console.log("server started at 3030");
})

