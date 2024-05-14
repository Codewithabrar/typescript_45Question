let guest_list: string[]= ['Babar Azam','Saim Ayub','Rizwan','Fakhar Zaman'];
let absent_guest: string= "Babar Azam";
let new_guest: string= "shaheen";
guest_list[0]=new_guest;
console.log(`Mr.${absent_guest} is not coming to the party.`);
console.log('Good News! we find Big Tabke so we are inviting three more guests.');
guest_list.unshift('Sir Hamza','Sir daniyal','Sir Zia khan');
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.' + guest_list[i] + '\n\nIt is our pleasure to invite you on our party.\n\nThank You\n\n');
}
console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Mr.${remove_guest}, you are not invite for dinner.`);
}
//yhn par jo guest bachy thy unko dubara madau kiya h ki wo abi b invited h.
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.'+guest_list[i] + ',\n\nYou are still invited.\n\nThank You\n\n');
}

guest_list.splice(0, 2);//splice ka istmal kr k many guest list sy sary guest kr diye h 

console.log(guest_list);