/*---------------------------create server-------------------------------------*/

const http = require('http')
const fs=require('fs')

const server =http.createServer((req, res) => {
    console.log(req.url);
    /*res.setHeader('content-type','text/plain');
    res.write('hello IJSE');*/

    //---------Add the HTML----------------
    /*res.setHeader('content-type','text/html');
    res.write('<h1>Hello IJSE</h1>');*/

    res.setHeader('content-type','text/html');
    // res.end('<h1>Hello IJSE</h1>');
    let file="index.html";
    switch (req.url){
        case '/home':
            res.stateCode=200;
            file="index.html";
            break;
        case '/about':
            res.stateCode=200;
            file="about.html";
            break;
        case '/career':
            res.stateCode=200;
            file="career.html";
            break;
        default:
            res.stateCode=404;
            break;
    }
    fs.readFile(`./views/${file}`,(err,data)=>{
        if (err){
            res.end('<h1>Sorry...!</h1>')
        }else{
            res.end(data)
        }
    })
});

server.listen(8080, 'localhost', ()=> {
    console.log('server is strat..!');
})
