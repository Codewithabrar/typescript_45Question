// Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name.
/// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and 
//two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored 
///correctly.
function create_car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    optional.forEach(function (choice) {
        var _a = choice.split(":"), option = _a[0], value = _a[1];
        car[option.trim()] = value.trim();
    });
    return car;
}
;
var my_car = create_car("Mehran", "Suzuki", "Colour : Gray", "CarNo : 7866AA");
console.log(my_car);
