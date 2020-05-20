const fs = require('fs');
const http = require('http');
const path = require('path');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(function (req,res){
    
});

readFiles('./rscard');
/**
 * Promise all
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 */
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

function readFiles(dirname) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function(err, filenames) {
            if(err) return reject(err)
            console.log(filenames, filenames.length);
        });
  });
}


server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});