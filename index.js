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
                    console.log(file, path.parse(file))
                    return resolve({file: file, data: data});
                });
            });
        });
  });
}

function jsxToDom(element, props, ...children){
    // Component Func handler  -- ie <Foo /> 
    if(typeof element === 'function'){
        return element({...props, children});
    }
    // Otherwise create a DOM node
    let el = document.createElement(element);

    if(props){
        for( let key of Object.keys(props)){
            // Listen for any events pass, like <Foo onClick={ handler }
            let eventName = key.match(/^on[A-Z]\e+/);
        }
    }
}