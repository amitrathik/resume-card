// const fs = require('fs');
// const path = require('path');

// readFiles('./rscard');

// function readFiles(dir) {
//     return new Promise((resolve, reject) => {
//         fs.readdir(dir, function(err, files) {
//             if(err) return reject(err)
//             console.log(files, files.length);
//             files.forEach((file,index) => {
//                 fs.readFile(path.resolve(dir,file), function (err, data){
//                     console.log(file, path.parse(file))
//                     return resolve({file: file, data: data});
//                 });
//             });
//         });
//   });
// }

// function jsxToDom(element, props, ...children){
//     // Component Func handler  -- ie <Foo /> 
//     if(typeof element === 'function'){
//         return element({...props, children});
//     }
//     // Otherwise create a DOM node
//     let el = document.createElement(element);

//     if(props){
//         for( let key of Object.keys(props)){
//             // Listen for any events pass, like <Foo onClick={ handler }
//             let eventName = key.match(/^on[A-Z]\e+/);
//         }
//     }
// }

// Sitemap:
// Home
//     About
//         Currently, I work as a <JobTitle>Sr. Front End Developer</JobTitle> at <JobComany getEmploymentHistory(currentDate)>Campbell Ewald</JobCompany> in <JobCompanyAdress>Detroit, MI</JobCountryAddress>. 
//         Although I am not born here, Detroit feels like home to me. Over the past 10 years, I witnessed and experiences Detroit's evolution first-hard during my time as a college student and -- eventually, working professional. 
//         The name “The MobiDev” actually was not my idea. It was actually coined by a colleague of mine whom I met in a research lab during my time in college. It was a student organization he had started with the passion to connect and collaborate with other students passionate about learning how to build mobile applications. However, he was too busy for it and asked if I would like to take it over. 



//     Blog
//     Contact

