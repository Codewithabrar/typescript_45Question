//Hello Admin: Make a array of five or more usernames,
// including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?
var userNanme = ['admin', 'hamza', 'ali', 'karrar', 'abbas'];
for (var _i = 0, userNanme_1 = userNanme; _i < userNanme_1.length; _i++) {
    var user = userNanme_1[_i];
    if (user === 'admin') {
        console.log('Hello admin, would you like to see a status report? ');
    }
    // Otherwise, print a generic greeting, 
    //such as Hello Eric, thank you for logging in again.
    else
        (console.log("Hello ".concat(user, ", thank you for logging in again")));
}
