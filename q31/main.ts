//No Users: Add an if test to Exercise 30 to make sure 
//the list of users is not empty.

// If the list is empty, print the message We need to find some users!

//Remove all of the usernames from your array,
// and make sure the correct message is printed.

let user_names: string[] = ['ali','akram','zeeshan','ikram','hussain'];
//let user_names: string[] = []
if(user_names.length > 0){
    console.log("we have enough user")
}else{
    console.log("We need to find some users!")
}