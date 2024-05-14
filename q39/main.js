//City Names: Write a function called city_country() 
//that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, 
//and print the value that’s returned.
function cityCountry(name, country) {
    return console.log("".concat(name, " is in ").concat(country));
}
cityCountry("lahore", "Pakistan");
cityCountry("Skardu", "Pakistan");
cityCountry("Islamabad", "Pakistan");
