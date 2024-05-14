//Checking Usernames: Do the following to create a program that simulates 
//how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see 
//if each new username has already been used. If it has,
// print a message that the person will need to enter a new username. 
//If a username has not been used, 
//print a message saying that the username is available.
//• Make sure your comparison is case insensitive.
// If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['zakirya', 'qamar', 'aneel', 'dilawar', 'mansoor'];
var new_users = ['abrar', 'ali', 'zakirya', 'aneel', 'mushahid'];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users === new_users; })) {
        console.log("".concat(new_users, " the person will need to enter a new username"));
    }
    else {
        console.log("".concat(new_users, " is available."));
    }
});
