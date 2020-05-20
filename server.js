const fs = require('fs');
const http = require('http');
const path = require('path');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(function (req,res){
    
}).listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

readFiles('./rscard');
function promiseAllP(items, block) {
    var promises = [];
    items.forEach(function(item,index) {
        promises.push( function(item,i) {
            return new Promise(function(resolve, reject) {
                return block.apply(this,[item,index,resolve,reject]);
            });
        }(item,index))
    });
    return Promise.all(promises);
} //promiseAll

function readFiles(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, function(err, files) {
            if(err) return reject(err)
            console.log(files, files.length);
            files.forEach((file,index) => {
                fs.readFile(path.resolve(dir,file), function (err, data){
                    // const {r}
                    console.log(file, path.parse(file))
                    return resolve({file: file, data: data});
                });
            });
        });
  });
}