/*---------------File Manage------------------*/
//import == require()

const fs=require('fs');  //fs-file system
fs.readFile('doc.txt',(err,data)=>{
    if (err){
        console.log(err);//<Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 4a 53 0d 0a> (buffer String)
    }else {
        console.log("AY:",data.toString());//Hello NodeJS
    }
});
console.log("--called!!")

/*Asynchrounos
* --called!!
*Hello NodeJS
* */

const read=fs.readFileSync('doc.txt');
console.log("SY:",read.toString())
console.log("--called2..!")

/* Synchrounos
    --called2..!
    Hello NodeJS
*/


/*----------------Write file-----------------------------*/

fs.writeFile('doc.txt','Welcome to notejs',()=>{
    console.log("Updated..!")
});


/*------------------create Directory------------------------------------*/
fs.mkdir('./doc2',(err)=>{
    console.log("Created!!")
});


/*------------------remove Directory------------------------------------*/
fs.rm('./doc2', {recursive: true, force: true});


/*------------------remove Directory(Synchronous)------------------------------------*/
fs.rmSync('./doc2', {recursive: true, force: true},()=>{
    console.log("Remove(Synchronous)")
});

/*------------------create  file------------------------------------*/
fs.appendFile('doc3.txt','',(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("New File Create")
    }
});
/*------------------create and content file------------------------------------*/
fs.appendFile('doc3.txt','Welcome',(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("New File Create")
    }
});


/*--------------------check resource availability----------------------------------------------*/
if (fs.existsSync('doc3.txt')){
    fs.writeFile('doc3.txt','\nWelcome',(err)=>{
        if (err){
            console.log(err)
        }else{
            console.log("New File Create")
        }
    });
}

/*------------------remove file------------------------------------*/
fs.unlink('doc3',()=>{
    console.log('removed')
});


