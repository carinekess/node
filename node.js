// const http = require('http');

// const server = http.createServer((req, res)=> {
// if (req.url === '/') {
//     res.write('hello world');
//     res.end();
// }
// if(req.url==='/api/courses'){
//     res,write(JSON.stringify([1,2,3]));
//     res.end();
// }

// });
// server.listen(3030);
// console.log('listerning on port 3030....');
const express= require('express');
const app =express();
app.get('/', (req, res)=>{
    res.send('hello world');
    app.get('/api/cousrses',(req, res)=>{
        res.send([1,2,3]);
    });
    // /api
    app.get('/api/courses/:id',(req ,res)=>{
     res.send(req.params.id);
    });
    app.get('/api/posts/:year/:month',(req ,res)=>{
        res.send(req.params.year);
       });

});
const port = process.env.PORT || 3030;
app.listen(port, ()=>console.log(`listerning on port ${port}....`));