setTimeout(()=>{
    console.log('timeout 1');
},0);

Promise.resolve().then(()=>{
    console.log('promise 1');
});

setTimeout(()=>{
    console.log('timeout 2');
},0);

Promise.resolve().then(()=>{
    console.log('promise 2');
});

//promise 1
//promise 2     
//timeout 1
//timeout 2
//Explanation:
// The setTimeout and Promise.resolve functions are asynchronous in JavaScript.
// The setTimeout function schedules a task to be executed  after a specified delay (in this case, 0 milliseconds).
// The Promise.resolve function creates a resolved Promise object.
// The .then method of the Promise object is used to register callbacks
// that are executed when the Promise is resolved.
// In this case, the callbacks are console.log statements that print messages.
// When the code is executed, the Promise.resolve statements are executed first,
// and the callbacks are registered. The setTimeout statements are executed next
// and schedule the tasks to be executed after the Promise callbacks have been registered.
// Since the Promise callbacks are executed first,
// the messages from the Promise.resolve statements are printed first.
// The messages from the setTimeout statements are printed next.
// The order of the messages is as follows:
// promise 1
// promise 2
// timeout 1
// timeout 2
// Note: The order of execution may vary depending on the JavaScript engine and environment.
// In this case, the messages from the Promise.resolve statements are printed first,
// followed by the messages from the setTimeout statements
// (even though the setTimeout statements are scheduled to be
// executed after the Promise callbacks are registered).
// This is because the Promise callbacks are executed asynchronously

