//lower case
let personName: string="Abrar";
console.log("loverscase:",personName.toLowerCase());
//Upper Case
console.log("uppercase:",personName.toUpperCase());
//titleCase
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));
