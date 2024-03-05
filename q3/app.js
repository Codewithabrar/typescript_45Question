//lower case
var personName = "Abrar";
console.log("loverscase:", personName.toLowerCase());
//Upper Case
console.log("uppercase:", personName.toUpperCase());
//titleCase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
