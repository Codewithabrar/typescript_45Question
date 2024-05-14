//Ordinal Numbers: Ordinal numbers indicate their position in a array,
// such as 1st or 2nd. Most ordinal numbers end in th,
// except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending
// for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
// and each result should be on a separate line.
var oneNo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, oneNo_1 = oneNo; _i < oneNo_1.length; _i++) {
    var some_number = oneNo_1[_i];
    var ordinal_number = void 0;
    if (some_number === 1) {
        ordinal_number = "st";
    }
    else if (some_number === 2) {
        ordinal_number = "nd";
    }
    else if (some_number === 3) {
        ordinal_number = "rd";
    }
    else {
        ordinal_number = "th";
    }
    console.log("".concat(some_number).concat(ordinal_number));
}
;
