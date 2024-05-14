//Unchanged Magicians: Start with your work from Exercise 40.
//Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged,
// return the new array and store it in a separate array.
//Call show_magicians() with each array to show that
// you have one array of the original names and one array with
//the Great added to each magician’s name.
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = [
    "David Copperfield",
    "David Blaine",
    "Penn & Teller",
    "Helder Guimaraes",
];
//make copied array by using .slice()
var copy_magician_name = magician_name.slice();
var copy_great_magician = make_great(copy_magician_name);
show_magicians(magician_name);
// console.log(copy_great_magician);
show_magicians(copy_great_magician);
