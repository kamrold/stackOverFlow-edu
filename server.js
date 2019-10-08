const express = require('express');
const MongoClient- require('mongodb').MongoClient 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function(){
    console.log('listening on 3000')
});
app.get('/questions', (req,res)=>{
    res.sendfile(__dirname + '/index.html');
});
app.get('/', (req,res) =>{
    res.sendfile(__dirname + '/index.html')
});
app.post('/questions',(req, res)=>{
    console.log( 'It is working')
})
app.post('/questions', (req,res) =>{
    console.log(req.body);
})
