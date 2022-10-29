//Node.js has built in module, called "Events",
//where you can create-, fire- and lister for- your own events.
//example 1 - registering for the event to be fired only one time using once.
//example 2 - create an event emitter instance and register a couple of callbacks
//example 3 - registering for the event with callback parameters
//capital letter for class
const EventEmitter = require("events");
const event = new EventEmitter();//we have created object named event

//multiple callbacks for the same event
event.on('sayMyName',()=>{
    console.log("your name is harsh");
})//defining the event 
event.on('sayMyName',()=>{
    console.log("your name is new");
})//defining the event 
event.on('sayMyName',()=>{
    console.log("your name is wow");
})//defining the event 


event.emit("sayMyName");//calling the event


//calling the event with several parameters
event.on("checkPage",(sc,msg)=>{
    console.log(`the status code is ${sc} and the status is ${msg}`);
})

event.emit("checkPage",400,"bad");