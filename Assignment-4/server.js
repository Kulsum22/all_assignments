
const http = require ("http");
const fs = require ("fs");
const path = require ("path");
const PORT = 3000;

const publicDir = path.join(__dirname,'public');

const server = http.createServer((req,res) => {

const filePath = path.join(publicDir, req.url === "/" ? 'home.html' : req.url === "/about" ? 'about.html' : req.url === "/contact" ? 'contact.html'  : req.url === "/error" ? 'error.html' : req.url);

 /*  if(req.url.match('\.css$')){
        const cssFile = path.join(__dirname,'public',req.url);
        const readStream = fs.createReadStream(cssFile,'utf-8');
        readStream.on('error', ()=>{
            readFile(404,'./public/error.html');
        });
        res.writeHead(200,{'content-type':'text/css'})
        readStream.pipe(res);
    }*/


        fs.readFile(filePath, (err, data) => {
            if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
      
          }
          res.writeHead(200);
          res.end(data);
        });
    
    
    });
    
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
   
