//Magicians: Make a array of magician’s names. /
//Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
var magician = ["David Copperfield", "David Blaine", "Penn & Teller", "Helder Guimaraes"];
function show_magician(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log("The name of magician's : ".concat(magician[i]));
    }
}
;
show_magician(magician);
//practices question
function player_name(name) {
    name.forEach(function (player) { return console.log(player); });
}
var cricketer_name = ["Babar", "saim", "Rizwan"];
player_name(cricketer_name);
// here i put cricketer name in () its means that 
//player name store each name of player using forEach command
// in player then by using arro funnction we print player 
//then is give us result like :
//babar
//saim
//rizwan
