let fs = require("fs");
let data;

// Create a readable stream 
let readerStream = fs.createReadStream('module.js');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8'); 
// Handle stream events --> data, end, and error 
readerStream.on('data', function(chunk) { data += chunk; }); 

readerStream.on('end',function() { console.log(data); }); 

readerStream.on('error', function(err) { console.log(err.stack); }); 

console.log("Program Ended");

//writing through stream

data = 'Simply Easy Learning'; 
// Create a writable stream 
let writerStream = fs.createWriteStream('output.txt'); 
// Write the data to stream with encoding to be utf8 
writerStream.write(data,'UTF8'); 
// Mark the end of file 
writerStream.end(); 
// Handle stream events --> finish, and error 
writerStream.on('finish', function() { console.log("Write completed."); }); 
writerStream.on('error', function(err) { console.log(err.stack); }); 

console.log("Write Program Ended");

//buffer uses
let buf = new Buffer.alloc(26); 
for (var i = 0 ; i < 26 ; i++) 
{ 
    buf[i] = i + 97; 
}

console.log( buf.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz console.log( buf.toString('ascii',0,5)); // outputs: abcde 
console.log( buf.toString('utf8',20,26)); // outputs: abcde 
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', 