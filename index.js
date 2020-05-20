const fs = require('fs');
const path = require('path');

readFiles('./rscard');

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