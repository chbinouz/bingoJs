const Tesseract = require('tesseract.js')
const fs = require('fs')
const pdfparse= require('pdf-parse')
const {createWorker} = require('tesseract.js')

const pdffile=fs.readFileSync('./public/Smith Resume.pdf')
//get the information

pdfparse(pdffile).then((data)=>{
    console.log(data.text)
})


/*const worker = createWorker({
    logger:m=>console.log(m)
  })
fs.readFile('./public/Smith Resume.pdf',(err,data)=>{
    if(err) return console.error("this is error",err)

    (async()=>{
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng')

      const {data : {text}}=await worker.recognize(data)
      console.log(text)
      await worker.terminate();
    })
})*/
