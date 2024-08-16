console.log('Before');
getUser(1,function(user) {
    console.log('User',user);
});
console.log('After');

function getUser(id,callback) {
    setTimeout(()=>{
     console.log('Reading a user data');
     callback({id:id,gitHubUsername:'mosh'});
    },2000);
}




/*
This code demonstrates the concept of asynchronous programming in JavaScript, particularly using callbacks.

Breakdown:
Synchronous Logs:

javascript
Copy code
console.log('Before');
This line logs the string 'Before' to the console. Since it's a synchronous operation, it executes immediately.

Asynchronous Function Call with Callback:

javascript
Copy code
getUser(1, function(user) {
    console.log('User', user);
});
The getUser function is called with two arguments:

1 is the id being passed to the getUser function.
A callback function is passed as the second argument, which logs the user data once it's retrieved.
However, getUser includes a setTimeout, which delays the execution of the callback by 2 seconds.

Synchronous Logs (Continued):

javascript
Copy code
console.log('After');
This line logs the string 'After' to the console. Like the first console.log, it executes immediately and doesn't wait for the getUser function to complete.

Asynchronous getUser Function:

javascript
Copy code
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user data');
        callback({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
}
The getUser function simulates an asynchronous operation (like fetching data from a database) using setTimeout:

After a 2-second delay, it logs 'Reading a user data'.
Then, it executes the callback function passed in earlier with an object representing the user data: { id: id, gitHubUsername: 'mosh' }.
Execution Order:
'Before' is logged.
The getUser function is called, but because of the 2-second delay, it doesn't immediately log anything.
'After' is logged immediately after the getUser call.
After 2 seconds, 'Reading a user data' is logged.
The callback function is executed, logging 'User { id: 1, gitHubUsername: 'mosh' }'.
Final Output in the Console:
css
Copy code
Before
After
Reading a user data
User { id: 1, gitHubUsername: 'mosh' }
This demonstrates how asynchronous functions in JavaScript can allow other code to run while waiting for time-consuming operations (like I/O tasks) to complete.








*/