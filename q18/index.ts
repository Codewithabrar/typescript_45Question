let countryLocation: string[] = ["italy","Iran","switzerland","Saudi arab","Uk"];
//Print your array in its original order.
console.log(countryLocation);
//print your array in alpphabetical order without modifiying the actual lsit.
let alphabeticalOrder = [...countryLocation].sort();
// alphabeticalOrder.sort();
console.log(alphabeticalOrder);
//show that your array is still in its original order by printing it.
console.log(countryLocation);
// Print your array in reverse alphabetical order without changing the order of the original list.

// let invalphabeticalOrder=alphabeticalOrder.reverse();
// console.log(" array in reverse alphabetical order ");
// console.log(invalphabeticalOrder);

let name_alphabeticalOrder =alphabeticalOrder.reverse();
console.log(name_alphabeticalOrder);            //here array has reverse alphabetical order
//Show that your array is still in its  original order by printing ot again.
console.log(countryLocation);
//reverse the order of your list .Print the array to show that its order has changed.
let againreversed = name_alphabeticalOrder.reverse();
console.log(againreversed);
//Reverse the order of your list again.Print the lsit to show its back to its original order.
let invAlphabeticalorder = againreversed.reverse();
console.log(invAlphabeticalorder);