//test for equaliy and inequality with strings
let color = "black";
console.log(color === "black");
console.log(color != "black");

//Tests using the lower case function
console.log(`is color.tolowerCase()=== black ? I predict true`);
console.log(color.toLowerCase() === "black");

console.log(`is color.toLOwerCase === white ? I predict false`);
console.log(color.toLowerCase() === "white");

//Numerical tests involving equality and inequality,
// greater than and less than,
//greater than or equal to,
//and less than or equal to

let myAge: number = 23;
console.log(`is myAge== 23 ? I predict true`);
console.log(myAge == 23);

console.log(`is myAge != 23 ? I predicct fasle`);
console.log(myAge != 23);

console.log(`is myAge<24 ? I predict true`);
console.log(myAge < 24);

console.log(`Is myAge < 22 ? I predict false`);
console.log(myAge < 22);

console.log(`is myAge >=23 ? I predict true`);
console.log(myAge >= 23);

console.log(`is myAge >= 24 ? I presict false`);
console.log(myAge >= 24);

console.log(`is myAge <= 24 ? I presict true`);
console.log(myAge <= 24);

console.log(`is myAge <= 22 ? I presict false`);
console.log(myAge <= 22);

//Tests using "and" and "or" operators
//for and
console.log(`is color=='black' && myAge == 23 ? I preedict true`);
console.log(color == "black" && myAge == 23);

console.log(`is color=='black' && myAge == 20 ? I predict false`);
console.log(color == "black" && myAge == 20);
//for or

console.log(`is color=='black' || myAge == 20 ? I preedict true`);
console.log(color == "black" && myAge == 23);

console.log(`is color=='white' || myAge == 20 ? I predict false`);
console.log(color == "white" || myAge == 20);

//Test whether an item is in a array
let list: number[] = [2, 3, 4, 5, 6];

// console.log(`is 5 in list ? I predict falsa`)
// console.log(5 in list)    // here when i console 5 its give me
//the out put false b/c the indexing start from 0

console.log(`is 4 in list ? I predict true`);
console.log(4 in list);

//Test whether an item is not in a array

console.log(` is 9 in list ? I predict false`);
console.log(9 in list);
