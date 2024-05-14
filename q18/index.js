var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countryLocation = ["italy", "Iran", "switzerland", "Saudi arab", "Uk"];
//Print your array in its original order.
console.log(countryLocation);
//print your array in alpphabetical order without modifiying the actual lsit.
var alphabeticalOrder = __spreadArray([], countryLocation, true).sort();
// alphabeticalOrder.sort();
console.log(alphabeticalOrder);
//show that your array is still in its original order by printing it.
console.log(countryLocation);
// Print your array in reverse alphabetical order without changing the order of the original list.
// let invalphabeticalOrder=alphabeticalOrder.reverse();
// console.log(" array in reverse alphabetical order ");
// console.log(invalphabeticalOrder);
var name_alphabeticalOrder = alphabeticalOrder.reverse();
console.log(name_alphabeticalOrder); //here array has reverse alphabetical order
//Show that your array is still in its  original order by printing ot again.
console.log(countryLocation);
//reverse the order of your list .Print the array to show that its order has changed.
var againreversed = name_alphabeticalOrder.reverse();
console.log(againreversed);
//Reverse the order of your list again.Print the lsit to show its back to its original order.
var invAlphabeticalorder = againreversed.reverse();
console.log(invAlphabeticalorder);
