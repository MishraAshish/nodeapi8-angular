//creating a tcp server

const server = require("net").createServer();

server.on("connection", socket => {
  console.log("socket", socket);
  socket.write("Welcome new client! \n")
})

server.listen(8000, ()=>{"Server Bound! "})

//require.extensions;
// NPM and 
//console.log(require.extensions);

// setImmediate(()=>{
//   console.log("This is ashish set immediate. ");
  
// })

//console.log(process.env);
//console.log(process.argv);

//libuv : c library developed for node now used in other libraries as well, used abstract non-blocking io, tcp udp scokcets, includes threadpool to work asynchronously