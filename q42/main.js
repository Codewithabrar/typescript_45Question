//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians 
//by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
var magician_name = ["David Copperfield", "David Blaine", "Penn & Teller", "Helder Guimaraes"];
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
show_magicians(magician_name);
var great_magician = make_great(magician_name);
console.log(great_magician);
