var guest_list = ['Babar Azam', 'Saim Ayub', 'Rizwan', 'Fakhar Zaman'];
var absent_guest = "Babar Azam";
var new_guest = "shaheen";
guest_list[0] = new_guest;
console.log("Mr.".concat(absent_guest, " is not coming to the party."));
console.log('Good News! we find Big Tabke so we are inviting three more guests.');
guest_list.unshift('Sir Hamza', 'Sir daniyal', 'Sir Zia khan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + '\n\nIt is our pleasure to invite you on our party.\n\nThank You\n\n');
}
console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Mr.".concat(remove_guest, ", you are not invite for dinner."));
}
//yhn par jo guest bachy thy unko dubara madau kiya h ki wo abi b invited h.
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nYou are still invited.\n\nThank You\n\n');
}
guest_list.splice(0, 2); //splice ka istmal kr k many guest list sy sary guest kr diye h 
console.log(guest_list);
