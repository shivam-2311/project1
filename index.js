const  express =require('express');
const path = require('path');
const app = express();
const port = 80;

app.use('/static', express.static('static'))

app.set('views',path.join(__dirname , 'views'))

app.get('/',(req,res)=>{
    res.sendFile('views/website.html', {root: __dirname})
});

app.listen(port, ()=>{
    console.log("the applicatrion started sucssefully at 80");
});