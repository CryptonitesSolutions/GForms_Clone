const express = require("express");
const fs = require("fs")
const app = express()
const path =require('path');
var cors = require("cors")
var bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(cors())
const Excel = require("exceljs")
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    next();
});

app.listen(9000, () =>{console.log("9000 port")})

app.get("/get_all_filenames",(req,res)=>{
    const directoryPath = path.join(__dirname,'/files');
    fs.readdir(directoryPath,function (err,files){
        if(err)
        {
            return console.log("error"+err);

        }
        res.send(files);
    });
});



app.post('/add_questions/:doc_id',(req,res)=>{
    var docs_data = req.body;
    var name = req.params.doc_id
    console.log(docs_data)
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`,data);
})


app.get('/data/:doc_id',(req,res)=>{
    var docId = req.params.doc_id;
    fs.readFile(`files/${docId}.json`,(err,data)=>{
        if (err) throw err;
        let ques_data = JSON.parse(data);
        console.log(req.params.doc_id)
    res.send(ques_data);
    })
})



app.post(`/student_response/:doc_id`, (req, res)=>{

    var docs_data = req.body;
    var name = req.params.doc_id;
    let workbook = new Excel.Workbook()
    var data =req.body.answer_data;
    let worksheet = workbook.addWorksheet(`${name}`)
    worksheet.columns = [{header: "Time stamp", "key": "datetime"}, ...docs_data.column] 
    worksheet.columns.forEach(column => {
        column.width = column.header.length < 12 ? 12: column.header.length

    })
    worksheet.getRow(1).font = {bold: true}
    data.forEach((e, index) => {
        const rowIndex = index + 2
        worksheet.addRow({
             ...e
        })

        })
        workbook.xlsx.writeFile(`${name}.xlsx`)



})