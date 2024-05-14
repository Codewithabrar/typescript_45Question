//T-Shirt: Write a function called make_shirt()
//that accepts a size and the text of a message
// that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt 
//and the message printed on it. Call the function.
// function make_shirt(){
//     let size = 'medium'
//     let message = 'the color is in white and the size is '
//     console.log(`${message} ${size} message : Broken`)
// }
// make_shirt()
//Write a function called make_shirt() that accepts a size
// and the text of a message that should be printed on the shirt.
function make_shirt() {
    var size = "large";
    var message = " the shirt is in black and size is ";
    //The function should print a sentence summarizing 
    //the size of the shirt and the message printed on it
    console.log(" ".concat(message, "  \"").concat(size, "\" message: alone warrior."));
}
//Call the function.
make_shirt();
