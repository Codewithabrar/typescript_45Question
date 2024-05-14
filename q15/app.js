var guest = ['Ahmad', 'M Ali', 'M Haider'];
for (var i = 0; i < guest.length; i++) {
    console.log('\n\nrespected Sir:' + guest[i] + '\nWe invite you on dinner tomorrow.\n\nThank You');
}
var not_attend = 'Ahmad';
var new_guest = "Babar azam";
guest[0] = new_guest;
for (var i = 0; i < guest.length; i++) {
    console.log('\n\nrespected Sir:' + guest[i] + '\nWe invite you on dinner tomorrow.\nThank You');
}
console.log("Mr ".concat(not_attend, " will not coming tomorrow dinner."));
