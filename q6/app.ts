// this save the name with whitespace

let Name: string=`\t\n Abrar \t\n`;
console.log(Name); //show the name with out whitespace
let stripped: string = Name.trim();
console.log(stripped);
