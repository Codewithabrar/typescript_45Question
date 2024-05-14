let guest: string[]= ['Ahmad','M Ali','M Haider'];
// for(let i=0; i<guest.length; i++){
//     console.log('\n\nrespected Sir:'+ guest[i] + '\nWe invite you on dinner tomorrow.\n\nThank You');
// }
let not_attend: string= 'Ahmad';
let new_guest: string="Babar azam";
guest[0] = new_guest;
for(let i=0; i<guest.length; i++){
    console.log('\n\nrespected Sir:'+ guest[i] + '\nWe invite you on dinner tomorrow.\nThank You');
}
guest.unshift('shaheen','fakhar','rizwan');
for(let i=0; i<guest.length; i++){
    console.log('\n\nrespected Sir:'+ guest[i] + '\nWe invite you on dinner tomorrow.\nThank You');
}