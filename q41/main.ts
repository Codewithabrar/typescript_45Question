//Magicians: Make a array of magician’s names. /
//Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magician :string[] = ["David Copperfield","David Blaine","Penn & Teller","Helder Guimaraes"]

 function show_magician(magician:string[]){
    for( let i=0; i<magician.length; i++){
        console.log(`The name of magician's : ${magician[i]}`)
    }
 };
 show_magician(magician);


 //practices question
function player_name(name:string[]){
    name.forEach(player => console.log(player))
}
 let cricketer_name: string[] = ["Babar","saim","Rizwan"]

 player_name(cricketer_name) 
  // here i put cricketer name in () its means that 
     //player name store each name of player using forEach command
  // in player then by using arro funnction we print player 
     //then is give us result like :
     //babar
    //saim
    //rizwan