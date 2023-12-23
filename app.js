/*---------------File Manage------------------*/
//import == require()

const fs=require('fs');  //fs-file system
fs.readFile('doc.txt',(err,data)=>{
    console.log(data);//<Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 4a 53 0d 0a> (buffer String)
    console.log(data.toString());//Hello NodeJS


});
