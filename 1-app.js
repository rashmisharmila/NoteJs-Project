//import the module
const os=require('os');


// open the project file in working directory and open git bash
// node app.js --> print Welcome to Note JS
//console.log("Welcome to Note JS")

const name ="IJSE"
//console.log(name)

/*---------------global object-------------------------------------*/
// console.log(global)
global.setTimeout(()=>{
    // console.log("Timeout...!")
},5000);

global.setInterval(()=>{
    //console.log("Interval Called..!")
},2000);

/*------------------environment variables-------------------------*/
//console.log(__dirname) // E:\2nd SEMESTER\RAD\nodejsProject
//console.log(__filename) //E:\2nd SEMESTER\RAD\nodejsProject\app.js

/*------------After add the noodemon------------------------*/
//console.log("welcome nodemon")

/*in built module*/
console.log(os.platform())//win32
console.log(os.version())//Windows 10 Home Single Language
console.log(os.tmpdir())//C:\Users\RASHMI~1\AppData\Local\Temp
console.log(os.release())//10.0.22621
console.log(os.homedir())//C:\Users\Rashmi Sharmila





